export interface GenericResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}

export interface RegisterResponse {
  count: number;
}
