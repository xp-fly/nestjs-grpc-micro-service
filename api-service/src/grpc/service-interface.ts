import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace order_module. */
export namespace order_module {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the OrderService service client.
         */
        getOrderService(): order_module.OrderService;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a OrderService service implementation.
         * @param impl OrderService service implementation
         */
        addOrderService(impl: order_module.OrderService): order_module.ServerBuilder;
    }

    /** Properties of an OrderDataResponse. */
    export interface OrderDataResponse {

        /** OrderDataResponse code */
        code?: (number|null);

        /** OrderDataResponse message */
        message?: (string|null);

        /** OrderDataResponse data */
        data?: (order_module.OrderData[]|null);
    }

    /** Properties of an OrderData. */
    export interface OrderData {

        /** OrderData id */
        id?: (number|null);

        /** OrderData name */
        name?: (string|null);
    }

    /** Properties of a QueryListRequest. */
    export interface QueryListRequest {

        /** QueryListRequest pageNo */
        pageNo?: (number|null);

        /** QueryListRequest pageSize */
        pageSize?: (number|null);
    }

    /** Constructs a new OrderService service. */
    export interface OrderService {

        /**
         * Calls GetList.
         * @param request QueryListRequest message or plain object
         * @param metadata Optional metadata
         * @returns Promise
         */
        getList(request: order_module.QueryListRequest, metadata?: grpc.Metadata): Observable<order_module.OrderDataResponse>;
    }
}

/** Namespace product_module. */
export namespace product_module {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the ProductService service client.
         */
        getProductService(): product_module.ProductService;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a ProductService service implementation.
         * @param impl ProductService service implementation
         */
        addProductService(impl: product_module.ProductService): product_module.ServerBuilder;
    }

    /** Properties of a ProductDataResponse. */
    export interface ProductDataResponse {

        /** ProductDataResponse code */
        code?: (number|null);

        /** ProductDataResponse message */
        message?: (string|null);

        /** ProductDataResponse data */
        data?: (product_module.ProductData[]|null);
    }

    /** Properties of a ProductData. */
    export interface ProductData {

        /** ProductData id */
        id?: (number|null);

        /** ProductData name */
        name?: (string|null);
    }

    /** Properties of a QueryListRequest. */
    export interface QueryListRequest {

        /** QueryListRequest pageNo */
        pageNo?: (number|null);

        /** QueryListRequest pageSize */
        pageSize?: (number|null);
    }

    /** Constructs a new ProductService service. */
    export interface ProductService {

        /**
         * Calls GetList.
         * @param request QueryListRequest message or plain object
         * @param metadata Optional metadata
         * @returns Promise
         */
        getList(request: product_module.QueryListRequest, metadata?: grpc.Metadata): Observable<product_module.ProductDataResponse>;
    }
}

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
        code?: (number|null);

        /** StringDataResponse message */
        message?: (string|null);

        /** StringDataResponse data */
        data?: (string|null);
    }

    /** Properties of a UserLoginRequest. */
    export interface UserLoginRequest {

        /** UserLoginRequest username */
        username?: (string|null);

        /** UserLoginRequest password */
        password?: (string|null);
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
