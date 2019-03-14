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
