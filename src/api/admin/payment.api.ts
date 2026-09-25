import api from "../axios";
import type {
  CreatePaymentPayload,
  CreatePaymentResponse,
  GetPaymentsParams,
  GetPaymentsResponse,
} from "../../types/backend/payments";

export const getPayments = async (
  params?: GetPaymentsParams,
): Promise<GetPaymentsResponse> => {
  const response = await api.get("/payments", {
    params,
  });

  return response.data;
};

export const createPayment = async (
  data: CreatePaymentPayload,
): Promise<CreatePaymentResponse> => {
  const response = await api.post("/payments", data);

  return response.data;
};
