/*参数类型*/
export interface MockParams {
  url: string;
  methods: string;
  data?: any;
  params?: any;

  response(options: any): Record<string, unknown>;
}
