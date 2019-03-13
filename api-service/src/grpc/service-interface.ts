import * as grpc from 'grpc';
import {Observable} from 'rxjs';

/** Namespace user_module. */
export namespace user_module {

  /** Contains all the RPC service clients. */
  export interface ClientFactory {

    /**
     * Returns the UserService service client.
     */
    getUserService(): user_module.UserService;
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {

    /**
     * Adds a UserService service implementation.
     * @param impl UserService service implementation
     */
    addUserService(impl: user_module.UserService): user_module.ServerBuilder;
  }

  /** Properties of a StringDataResponse. */
  export interface StringDataResponse {

    /** StringDataResponse code */
    code?: (number | null);

    /** StringDataResponse message */
    message?: (string | null);

    /** StringDataResponse data */
    data?: (string | null);
  }

  /** Properties of a UserLoginRequest. */
  export interface UserLoginRequest {

    /** UserLoginRequest username */
    username?: (string | null);

    /** UserLoginRequest password */
    password?: (string | null);
  }

  /** Constructs a new UserService service. */
  export interface UserService {

    /**
     * Calls Login.
     * @param request UserLoginRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    login(request: user_module.UserLoginRequest, metadata?: grpc.Metadata): Observable<user_module.StringDataResponse>;
  }
}
