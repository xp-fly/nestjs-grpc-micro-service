import * as grpc from 'grpc';
import { Observable } from 'rxjs';
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
