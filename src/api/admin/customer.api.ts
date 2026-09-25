import api from "../axios";
import type { CustomersResponse, Customer } from "../../types/backend/customer";

export const getCustomers = async (
  page = 1,
  limit = 10,
  search = "",
): Promise<CustomersResponse> => {
  const response = await api.get("/users/customers", {
    params: { page, limit, search },
  });
  return response.data;
};

export const getCustomerById = async (id: string): Promise<Customer> => {
  const response = await api.get(`/users/customers/${id}`);
  return response.data.customer;
};

export const getCustomerBookings = async (customerId: string) => {
  const response = await api.get(`/bookings/customer/${customerId}`);

  return response.data;
};
