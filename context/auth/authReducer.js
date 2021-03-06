import {
  REGISTO_EXITOSO,
  REGISTO_ERROR,
  OCULAR_ALERTA,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  USUARIO_AUTENTICADO,
  CERRAR_SESION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTO_EXITOSO:
    case REGISTO_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };
    case OCULAR_ALERTA:
      return {
        ...state,
        mensaje: null,
      };
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };
    case CERRAR_SESION:
      localStorage.removeItem("token");
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
      };

    default:
      return state;
  }
};
