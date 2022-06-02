export interface GetCoursesRequestDto {
  query?: string;
  loadUser?: boolean;
  published?: boolean;
  take?: number;
  skip?: number;
  orderBy?: string;
  orderDirection?: "DESC" | "ASC" | "asc" | "desc";
}
