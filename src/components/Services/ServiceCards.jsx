"use client";

import { useEffect, useState } from "react";
import { Code, ShoppingCart, Brain, Monitor, Server } from "lucide-react";
import servicesData from "@/data/services.json";

// Icon mapping function
const getIconComponent = (iconName) => {
  const iconMap = {
    Code: Code,
    ShoppingCart: ShoppingCart,
    Brain: Brain,
    Monitor: Monitor,
    Server: Server,
  };
  return iconMap[iconName] || Code; // Default to Code if icon not found
};

export function ServiceCard({
  className,
  children,
  service,
  index,
  isVisible,
  ...props
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl overflow-hidden relative transition-all duration-500 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "rgba(30, 30, 30, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transform: hover
          ? "translateY(-5px) scale(1.02)"
          : "translateY(0) scale(1)",
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}

      {/* Gradient border effect on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "padding-box linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          opacity: hover ? 0.3 : 0,
          borderRadius: "0.75rem",
        }}
      />
    </div>
  );
}

export default function ServiceCards({ serviceType }) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Get services based on serviceType
  let services = [];
  if (serviceType === 'all') {
    // Combine all services from all categories
    Object.values(servicesData).forEach(categoryServices => {
      services = services.concat(categoryServices);
    });
  } else {
    services = servicesData[serviceType] || [];
  }

  useEffect(() => {
    setIsVisible(true);
  }, [serviceType]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 relative overflow-hidden">
      <div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse-slow"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
          filter: "blur(60px)",
          animation: "pulse 10s infinite alternate-reverse",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="mb-2 text-sm uppercase tracking-wider font-medium"
            style={{ color: "var(--head-text)" }}
          >
            SERVICES
          </h2>
          <h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{
              background:
                "linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            {serviceType === 'all' && 'All Services'}
            {serviceType === 'webapps' && 'Web Applications'}
            {serviceType === 'shopify' && 'Shopify Solutions'}
            {serviceType === 'ai' && 'AI Integrations'}
            {serviceType === 'frontend' && 'Frontend Development'}
            {serviceType === 'backend' && 'Backend Development'}
          </h1>
        </div>

        <div className="flex flex-wrap w-full gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isVisible={isVisible}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative"
              >
                <div className="p-6 space-y-4">
                  {/* Service Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-4"
                    style={{
                      background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Info */}
                  <div className="space-y-3">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--card-dark-text-light)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base line-clamp-3"
                      style={{ color: "var(--card-dark-text)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  {service.features && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: "rgba(46, 46, 46, 0.4)",
                            backdropFilter: "blur(12px)",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            color: "var(--card-dark-text-light)",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="pt-3">
                    <span
                      className="text-lg font-semibold"
                      style={{
                        background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <a
                      href="/contact"
                      className="w-full block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 group text-center"
                      style={{
                        background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                        color: "var(--foreground)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </ServiceCard>
            );
          })}
        </div>
      </div>
    </div>
  );
} 