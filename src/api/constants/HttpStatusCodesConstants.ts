export class HttpStatusCodesConstants {

    public static HTTP_CONTINUE = 100;

    public static HTTP_SWITCHING_PROTOCOLS = 101;

    // [Successful 2xx]

    public static HTTP_OK = 200;

    public static HTTP_CREATED = 201;

    public static HTTP_ACCEPTED = 202;

    public static HTTP_NONAUTHORITATIVE_INFORMATION = 203;

    public static HTTP_NO_CONTENT = 204;

    public static HTTP_RESET_CONTENT = 205;

    public static HTTP_PARTIAL_CONTENT = 206;

    // [Redirection 3xx]

    public static HTTP_MULTIPLE_CHOICES = 300;

    public static HTTP_MOVED_PERMANENTLY = 301;

    public static HTTP_FOUND = 302;

    public static HTTP_SEE_OTHER = 303;

    public static HTTP_NOT_MODIFIED = 304;

    public static HTTP_USE_PROXY = 305;

    public static HTTP_UNUSED = 306;

    public static HTTP_TEMPORARY_REDIRECT = 307;

    // [Client Error 4xx]

    public static HTTP_BAD_REQUEST = 400;

    public static HTTP_UNAUTHORIZED = 401;

    public static HTTP_PAYMENT_REQUIRED = 402;

    public static HTTP_FORBIDDEN = 403;

    public static HTTP_NOT_FOUND = 404;

    public static HTTP_METHOD_NOT_ALLOWED = 405;

    public static HTTP_NOT_ACCEPTABLE = 406;

    public static HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;

    public static HTTP_REQUEST_TIMEOUT = 408;

    public static HTTP_CONFLICT = 409;

    public static HTTP_GONE = 410;

    public static HTTP_LENGTH_REQUIRED = 411;

    public static HTTP_PRECONDITION_FAILED = 412;

    public static HTTP_REQUEST_ENTITY_TOO_LARGE = 413;

    public static HTTP_REQUEST_URI_TOO_LONG = 414;

    public static HTTP_UNSUPPORTED_MEDIA_TYPE = 415;

    public static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;

    public static HTTP_EXPECTATION_FAILED = 417;

    // [Server Error 5xx]

    public static HTTP_INTERNAL_SERVER_ERROR = 500;

    public static HTTP_NOT_IMPLEMENTED = 501;

    public static HTTP_BAD_GATEWAY = 502;

    public static HTTP_SERVICE_UNAVAILABLE = 503;

    public static HTTP_GATEWAY_TIMEOUT = 504;

    public static HTTP_VERSION_NOT_SUPPORTED = 505;
}
