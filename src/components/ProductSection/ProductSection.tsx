import { useState, useEffect } from "react";

import Container from "../Container/Container";
import SectionTitle from "../Container/SectionTitle";

import ProductCard from "./ProductCard";
// import { Products } from "../../data/Products"; // mock data
import { getVehicles } from "../../api/vehicle.api";
import type { Vehicle } from "../../types/backend/vehicle";

const ProductSection = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getVehicles();

        console.log("Vehicle API response:", data);

        setVehicles(data.vehicles);
      } catch (error: any) {
        console.error("Failed to fetch vehicles:", error);

        setError(error.response?.data?.message || "Failed to load vehicles");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle subtitle="Products" title="Featured Products" />

        {/* mock data */}
        {/* <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}

        {/* backend data */}
        {/* Loading */}
        {loading && (
          <div className="mt-10 flex justify-center">
            <p className="text-[var(--foreground)]">Loading vehicles...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-10 flex justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Vehicles */}
        {!loading && !error && vehicles.length > 0 && (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.slice(0, 12).map((vehicle) => (
              <ProductCard key={vehicle._id} product={vehicle} />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && vehicles.length === 0 && (
          <div className="mt-10 flex justify-center">
            <p className="text-[var(--foreground)]">No vehicles found.</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductSection;
