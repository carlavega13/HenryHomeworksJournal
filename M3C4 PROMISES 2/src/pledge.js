"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// TU CÓDIGO AQUÍ:
class $Promise {
  constructor(executor) {
    //? ERROR SI EL EXECUTOR NO ES FUNCION
    if (typeof executor !== "function")
      throw TypeError("executor must be a function");

    //?ESTADO INICIAL PENDING / VALUE UNDEFINED / HANDLER GROUPS
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];

    //? HANDLER CALL
    const callHandler = (value) => {
      while (this._handlerGroups.length > 0) {
        const currentHandler = this._handlerGroups.shift();

        //? RESOLUCION DE PROMESA B A FULLFILLED
        if (this._state === "fulfilled") {
          //?  SI TENGO SUCCESS HANDLER
          if (currentHandler.successCb) {
            //?   TRY
            try {
              const result = currentHandler.successCb(this._value);

              //? SI EL SUCCESS HANDLER RETORNA UNA PROMESA
              if (result instanceof $Promise) {
                result.then(
                  (value) => {
                    currentHandler.downstreamPromise._internalResolve(value);
                  },
                  (reason) => {
                    currentHandler.downstreamPromise._internalReject(reason);
                  }
                );

                //? SI EL SUCCESS HANDLER RETORNA UN VALOR
              } else {
                currentHandler.downstreamPromise._internalResolve(result);
              }

              //? CATCH
            } catch (error) {
              currentHandler.downstreamPromise._internalReject(error);
            }

            //?  SI NO TENGO SUCCES HANDLER
          } else {
            currentHandler.downstreamPromise._internalResolve(this._value);
          }
        }

        //? RESOLUCION DE PROMESA B A REJECTED
        if (this._state === "rejected") {
          //? SI TENGO ERROR HANDLER
          if (currentHandler.errorCb) {
            try {
              const result = currentHandler.errorCb(this._value);

              //? SI EL ERROR HANDLER RETORNA UNA PROMESA
              if (result instanceof $Promise) {
                result.then(
                  (value) => {
                    currentHandler.downstreamPromise._internalResolve(value);
                  },
                  (reason) => {
                    currentHandler.downstreamPromise._internalReject(reason);
                  }
                );

                //? SI EL ERROR HANDLER RETORNA UN VALOR
              } else {
                currentHandler.downstreamPromise._internalResolve(result);
              }

              //? CATCH
            } catch (error) {
              currentHandler.downstreamPromise._internalReject(error);
            }

            //? NO TENGO ERROR HANDLER
          } else {
            currentHandler.downstreamPromise._internalReject(this._value);
          }
        }
      }
    };

    //?METODOS DE INSTANCIA
    this._internalResolve = (data) => {
      //? SOLO EJECUTA CUANDO LA PROMESA ES PENDING
      if (this._state === "pending") {
        //
        //? CAMBIA EL ESTADO DE LA PROMESA DE PENDING A FULFILLED
        this._state = "fulfilled";

        //? ENVIA DATA A LA PROMESA PARA ALMACENAMIENTO
        this._value = data;

        //?  LLAMO A CLL HANDLER
        callHandler(this._value);
      }
    };

    this._internalReject = (reason) => {
      //
      //? SOLO EJECUTA CUANDO LA PROMESA ES PENDING
      if (this._state === "pending") {
        //? CAMBIA EL ESTADO DE LA PROMESA DE PENDING A REJECTED
        this._state = "rejected";

        //? ENVIA DATA A LA PROMESA PARA ALMACENAMIENTO
        this._value = reason;

        //?  LLAMO A CLL HANDLER
        callHandler(this._value);
      }
    };

    //? FUNCIONES RESOLVE Y REJECT
    const resolve = (value) => this._internalResolve(value);

    const reject = (reason) => this._internalReject(reason);
    //?  EJECUTO EL EXECUTOR
    executor(resolve, reject);

    //?  HANDLERS THEN
    this.then = (successHandler, errorHandler) => {
      //?  NUEVA PROMESA A RETORNAR
      const downstreamPromise = new $Promise(() => {});
      this._handlerGroups.push({
        successCb: typeof successHandler === "function" ? successHandler : null,
        errorCb: typeof errorHandler === "function" ? errorHandler : null,
        downstreamPromise,
      });
      //? SI EL ESTADO ES DISTINTO DE PENDING LLAMO A CLL HANDLER
      this._state !== "pending" && callHandler(this._value);
      //?   RETORNO LA NUEVA PROMESA
      return downstreamPromise;
    };

    //? CATCH
    this.catch = (errorHandler) => {
      return this.then(null, errorHandler);
    };

    this.resolve = () => {};
    this.all = () => {};
  }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
