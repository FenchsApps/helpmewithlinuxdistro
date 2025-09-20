
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ru";

interface SettingsContextType {
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [animationsEnabled, setAnimationsEnabledState] = useState<boolean>(true);
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let animItem, langItem;
    try {
      animItem = window.localStorage.getItem("animationsEnabled");
      langItem = window.localStorage.getItem("language");
    } catch (error) {
       console.error("Could not access localStorage", error);
    }

    setAnimationsEnabledState(animItem ? JSON.parse(animItem) : true);
    setLanguageState((langItem as Language) || "en");

    setIsMounted(true);
  }, []);

  const setAnimationsEnabled = (enabled: boolean) => {
    setAnimationsEnabledState(enabled);
    try {
      window.localStorage.setItem("animationsEnabled", JSON.stringify(enabled));
    } catch (error) {
      console.error("Failed to write to localStorage", error);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem("language", lang);
    } catch (error) {
      console.error("Failed to write to localStorage", error);
    }
  };

  const value = {
    animationsEnabled,
    setAnimationsEnabled,
    language,
    setLanguage,
  }

  if (!isMounted) {
    return (
      <SettingsContext.Provider value={value}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </SettingsContext.Provider>
    );
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
