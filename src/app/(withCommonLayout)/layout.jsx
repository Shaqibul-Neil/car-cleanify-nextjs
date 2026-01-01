import Container from "@/components/shared/Container";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        <main className="min-h-[90vh]">{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default layout;
