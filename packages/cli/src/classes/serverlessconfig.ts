export class ServerlessConfig {
    s3File = "db.json";
    s3Bucket = "jsonsls-${self:service}-${self:provider.stage}";
    basePath = "/${self:provider.stage}";
    awsRegion: string | undefined;
    stage = 'dev'
    apiKeyName: string | undefined;
    apiKeyValue: string | undefined;
    static merge = <T, U>(t: T, u: U) => Object.assign({}, t, u);
  }
