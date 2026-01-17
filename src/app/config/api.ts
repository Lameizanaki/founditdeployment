// API configuration - centralized for all API endpoints
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8085";

export const API_ENDPOINTS = {
  BASE_URL: API_BASE_URL,

  // Auth endpoints
  LOGIN: `${API_BASE_URL}/login`,
  REGISTER: `${API_BASE_URL}/register`,
  LOGIN_EMAIL: `${API_BASE_URL}/api/login/email`,
  CHECK_AUTH: `${API_BASE_URL}/api/check-auth`,

  // User management
  UPDATE_ROLE: `${API_BASE_URL}/user/update-role`,

  // Gig endpoints
  GIGS_CLIENT: `${API_BASE_URL}/gigs/client`,
  GIGS_FREELANCER: `${API_BASE_URL}/gigs/freelancer`,
  GIGS_FREELANCER_CLIENT_VIEW: `${API_BASE_URL}/gigs/freelancer/client-view`,
  GIGS_CLIENT_PUBLIC: `${API_BASE_URL}/gigs/client/public`,
  GIGS_FREELANCER_PUBLIC: `${API_BASE_URL}/gigs/freelancer/public`,

  // Orders
  ORDERS: `${API_BASE_URL}/api/orders`,
  ORDERS_FREELANCER: (freelancerId: number) => `${API_BASE_URL}/api/orders/freelancer/${freelancerId}`,
  ORDERS_CLIENT: (clientId: number) => `${API_BASE_URL}/api/orders/client/${clientId}`,
  ORDER_BY_ID: (orderId: number) => `${API_BASE_URL}/api/orders/${orderId}`,
  ORDER_STATUS: (orderId: number) => `${API_BASE_URL}/api/orders/${orderId}/status`,

  // Chat
  CHAT_CONVERSATIONS: `${API_BASE_URL}/chat/conversations`,
  CHAT_MESSAGES: (otherUserId: string) => `${API_BASE_URL}/chat/messages?otherUserId=${encodeURIComponent(otherUserId)}`,
  SEND_PROPOSAL: `${API_BASE_URL}/chat/sendProposal`,

  // Profile
  CLIENT_PROFILE: `${API_BASE_URL}/client/profile`,
  CLIENT_PROFILE_MY: `${API_BASE_URL}/client/profile/my-profile`,
  CLIENT_PROFILE_PUBLIC: (id: string) => `${API_BASE_URL}/client/profile/public/${id}`,

  // Freelancer Profile
  FREELANCER_PROFILE: `${API_BASE_URL}/freelancer/profile`,

  // Jobs
  JOBS_SEARCH: `${API_BASE_URL}/jobs/search`,
  JOBS_CLIENT: (userId: number) => `${API_BASE_URL}/jobs/client/${userId}`,

  // Proposals
  PROPOSALS: `${API_BASE_URL}/proposals`,
  PROPOSALS_CLIENT: (userId: number) => `${API_BASE_URL}/proposals/client/${userId}`,
  PROPOSAL_BY_ID: (proposalId: number) => `${API_BASE_URL}/proposals/${proposalId}`,
  PROPOSAL_ACCEPT: (proposalId: number, clientId: number) => `${API_BASE_URL}/proposals/${proposalId}/accept?clientId=${clientId}`,
  PROPOSAL_REJECT: (proposalId: number, clientId: number, reason: string) =>
    `${API_BASE_URL}/proposals/${proposalId}/reject?clientId=${clientId}&reason=${encodeURIComponent(reason)}`,

  // Contracts
  CONTRACTS_SEARCH: `${API_BASE_URL}/contracts/search`,

  // EKYC
  EKYC_STATUS: `${API_BASE_URL}/ekyc/status`,

  // Offers
  OFFERS_CLIENT_TO_FREELANCER: `${API_BASE_URL}/offers/client-to-freelancer`,

  // Milestones
  MILESTONES: `${API_BASE_URL}/milestones`,

  // Notifications
  NOTIFICATIONS: `${API_BASE_URL}/notifications`,

  // Settings
  SETTINGS: `${API_BASE_URL}/settings`,

  // Dashboard
  DASHBOARD: `${API_BASE_URL}/dashboard`,

  // Analytics
  ANALYTICS: `${API_BASE_URL}/analytics`,

  // Payments
  PAYMENTS: `${API_BASE_URL}/payments`,

  // Reviews
  REVIEWS: `${API_BASE_URL}/reviews`,

  // Favorites
  FAVORITES: `${API_BASE_URL}/favorites`,
} as const;

export default API_ENDPOINTS;
