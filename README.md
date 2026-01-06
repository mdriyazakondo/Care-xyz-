care-xyz/
├── public/ # Images, Icons
├── src/
│ ├── app/ # App Router
│ │ ├── api/ # Backend API Routes (MongoDB logic here)
│ │ │ ├── auth/ # Login, Register APIs
│ │ │ ├── services/ # GET/POST services
│ │ │ ├── bookings/ # Booking CRUD operations
│ │ │ └── checkout/ # Stripe Payment API
│ │ ├── (auth)/ # Login/Register UI
│ │ ├── (user)/ # My Bookings, Profile
│ │ ├── (admin)/ # Admin Dashboard
│ │ ├── service/[id]/ # Service Details
│ │ └── booking/[id]/ # Booking Page
│ ├── components/ # UI Components
│ │ ├── shared/ # Navbar, Footer
│ │ ├── cards/ # ServiceCard, BookingCard
│ │ ├── forms/ # RegistrationForm, BookingForm
│ │ └── home/ # Banner, Testimonials
│ ├── lib/ # Backend Logic & Database
│ │ ├── dbConnect.js # MongoDB Connection string
│ │ └── authOptions.js # NextAuth configuration
│ ├── models/ # MongoDB Schemas (Mongoose)
│ │ ├── User.js # User Schema (NID, Email, Role)
│ │ ├── Service.js # Service Schema
│ │ └── Booking.js # Booking Schema (Status, Cost)
│ ├── services/ # Frontend Data Fetching (Axios/Fetch)
│ │ ├── getServices.js
│ │ └── postBooking.js
│ ├── hooks/ # Custom Client-side hooks
│ └── utils/ # Price calculation, Date formatting
├── .env.local # MONGODB_URI, NEXTAUTH_SECRET, STRIPE_KEY
├── tailwind.config.js
└── package.json
