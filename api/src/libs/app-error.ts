export class AppError extends Error {
  constructor(
    public message: string,
    public options?: {
      statusCode: number;
      code?: string;
      errors?: Array<Record<string, string>>;
    }
  ) {
    super();
  }
}
