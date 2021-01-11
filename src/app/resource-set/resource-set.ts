
export interface ResourceSet {
    /**
     * The unique id (uuid) of the resource set
     */
    id: string;

    /**
     * REQUIRED. A human-readable string describing a set of one or more resources. The authorization server MAY use this name in any user interface it presents to the resource owner.
     */
    name: string;

    /**
     * OPTIONAL. A URI that provides the network location for the resource set being registered. For example, if the resource set corresponds to a digital photo, the value of this property could be an HTTP-based URI identifying the location of the photo on the web. The authorization server MAY use this information in various ways to inform clients about a resource set's location. Note: When a client attempts access to a presumptively protected resource without an access token, the resource server needs to ascertain the authorization server and resource set identifier associated with that resource without any context to guide it. In practice, this likely means that the URI reference used by the client needs to be unique per resource set.
     */
    uri: URL;

    /**
     * OPTIONAL. A string uniquely identifying the semantics of the resource set. For example, if the resource set consists of a single resource that is an identity claim that leverages standardized claim semantics for "verified email address", the value of this property could be an identifying URI for this claim. The authorization server MAY use this information in processing information about the resource set or displaying information about it in any user interface it presents to the resource owner.
     */
    type: string;

    /**
     * REQUIRED. An array of strings indicating the available scopes for this resource set. Any of the strings MAY be either a plain string or a URI (see Section 2.1.2). If a scope is a URI, then it MUST resolve to a scope description document (see Section 2.1.1).
     */
    scopes: string[];

    /**
     * OPTIONAL. A URI for a graphic icon representing the resource set. The authorization server MAY use the referenced icon in any user interface it presents to the resource owner.
     */
    icon_uri: URL;
}
