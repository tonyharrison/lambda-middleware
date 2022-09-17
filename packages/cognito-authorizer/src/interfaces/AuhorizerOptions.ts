export interface AuthorizerOptions<Event = any, ISS=undefined> {
    /** Optional list of issuers  */
    iss?: ISS & []
}

export function isAuhorizerOptions(options:any): options is AuthorizerOptions{
    return (
        options != null &&
        (options.iss === undefined ||  Array.isArray(options.iss)) // TODO test strings in array are urls.
    )
}