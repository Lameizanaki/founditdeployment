// Example: How to use the gig service with permissions in a component
"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { ProtectedRoute } from "@/app/components/auth/ProtectedRoute";
import { RoleGuard } from "@/app/components/auth/RoleGuard";
import { Role, Permission } from "@/app/types/auth";
import gigService, { Gig } from "@/app/services/gigService";
import Loading from "@/app/components/styles/global_styles/loading/loading";

export default function GigListPage() {
  return (
    <ProtectedRoute requiredRole={[Role.CLIENT, Role.FREELANCER, Role.SELLER]}>
      <GigListContent />
    </ProtectedRoute>
  );
}

function GigListContent() {
  const { user, hasPermission, hasRole } = useAuth();
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gigs on mount
  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await gigService.getGigs();
      setGigs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load gigs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateGig = async () => {
    try {
      const newGig = await gigService.createGig({
        title: "New Gig",
        description: "Description",
        price: 100,
      });
      setGigs([...gigs, newGig]);
      alert("Gig created successfully!");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to create gig");
    }
  };

  const handleDeleteGig = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gig?")) return;

    try {
      await gigService.deleteGig(id);
      setGigs(gigs.filter((g) => g.id !== id));
      alert("Gig deleted successfully!");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete gig");
    }
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchGigs}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gigs</h1>

        {/* Show Create button only for users with CREATE_GIG permission */}
        <RoleGuard requiredPermission={Permission.CREATE_GIG}>
          <button
            onClick={handleCreateGig}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Create Gig
          </button>
        </RoleGuard>

        {/* Alternative: Show role switch prompt for clients */}
        {hasRole(Role.CLIENT) && (
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-sm text-blue-600">
              Want to create gigs? Switch to Freelancer or Seller role
            </p>
            <a
              href="/page/type_role"
              className="text-blue-700 underline text-sm"
            >
              Switch Role
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gigs.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center py-8">
            No gigs available
          </p>
        ) : (
          gigs.map((gig) => (
            <div key={gig.id} className="border rounded-lg p-4 bg-white shadow">
              <h3 className="font-semibold text-lg">{gig.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{gig.description}</p>
              <p className="text-teal-600 font-bold mt-3">${gig.price}</p>

              <div className="mt-4 flex gap-2">
                {/* Show Edit button only for FREELANCER/SELLER */}
                <RoleGuard requiredPermission={Permission.UPDATE_GIG}>
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                    Edit
                  </button>
                </RoleGuard>

                {/* Show Delete button only for FREELANCER/SELLER */}
                <RoleGuard requiredPermission={Permission.DELETE_GIG}>
                  <button
                    onClick={() => handleDeleteGig(gig.id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </RoleGuard>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Info box showing current permissions */}
      <div className="mt-8 bg-gray-50 border rounded p-4">
        <h4 className="font-semibold mb-2">Your Current Permissions:</h4>
        <p className="text-sm text-gray-600">Role: {user?.role}</p>
        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          <li>
            ✓ Read Gigs: {hasPermission(Permission.READ_GIG) ? "Yes" : "No"}
          </li>
          <li>
            ✓ Create Gigs: {hasPermission(Permission.CREATE_GIG) ? "Yes" : "No"}
          </li>
          <li>
            ✓ Update Gigs: {hasPermission(Permission.UPDATE_GIG) ? "Yes" : "No"}
          </li>
          <li>
            ✓ Delete Gigs: {hasPermission(Permission.DELETE_GIG) ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    </div>
  );
}
