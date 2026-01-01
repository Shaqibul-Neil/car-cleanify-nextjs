import { BookingContextProvider } from "@/context/bookingContext";
import { UserContextProvider } from "@/context/userContext";

const Providers = ({ children }) => {
  return (
    <UserContextProvider>
      <BookingContextProvider>{children}</BookingContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
