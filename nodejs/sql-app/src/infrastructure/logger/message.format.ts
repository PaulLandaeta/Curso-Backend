import { Response } from 'express';
import { statusMessages } from "./errorTypesRest";

export const showError = (errorType: number, message?: any) => {
  return {
    error: errorType,
    body: {
      message: message || statusMessages[`${errorType}`],
    }
  };
};

export const showInfo = (statusCode: number, data: any) => {
  return {
    status: statusCode,
    body: {
      message: statusMessages[`${statusCode}`],
      data: data,
    }
  };
};

export const showInfoResponse = (statusCode: number, data: any, res: Response) => {
  return res.status(statusCode).json(showInfo(statusCode, data));
};

export const showErrorResponse = (errorType: number, res: Response, message?: any) => {
  return res.status(errorType).json(showError(errorType, message));
};
