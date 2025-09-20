
type Translation = {
    [lang in 'en' | 'ru']: {
        text: string;
        description: string;
        low_label: string;
        high_label: string;
    }
}

export type Question = {
  id: string;
  text: string; // fallback
  description: string; // fallback
  low_label: string; // fallback
  high_label: string; // fallback
  translations: Translation;
};

export const questions: Question[] = [
  {
    id: "experience",
    text: "What is your experience level with Linux?",
    description: "Honesty is key! This helps determine how much hand-holding you might need.",
    low_label: "Total Beginner",
    high_label: "Seasoned Expert",
    translations: {
        en: {
            text: "What is your experience level with Linux?",
            description: "Honesty is key! This helps determine how much hand-holding you might need.",
            low_label: "Total Beginner",
            high_label: "Seasoned Expert",
        },
        ru: {
            text: "Каков ваш уровень опыта работы с Linux?",
            description: "Честность - ключ к успеху! Это поможет определить, сколько помощи вам может понадобиться.",
            low_label: "Полный новичок",
            high_label: "Опытный эксперт",
        }
    }
  },
  {
    id: "primary_use",
    text: "What will be the primary use for this computer?",
    description: "Are you a gamer, a developer, or just browsing the web?",
    low_label: "General Use (Web, Office)",
    high_label: "Specialized (Dev, Server)",
     translations: {
        en: {
            text: "What will be the primary use for this computer?",
            description: "Are you a gamer, a developer, or just browsing the web?",
            low_label: "General Use (Web, Office)",
            high_label: "Specialized (Dev, Server)",
        },
        ru: {
            text: "Каково будет основное предназначение этого компьютера?",
            description: "Вы геймер, разработчик или просто просматриваете веб-страницы?",
            low_label: "Общее использование (веб, офис)",
            high_label: "Специализированное (разработка, сервер)",
        }
    }
  },
  {
    id: "latest_software",
    text: "How important is having the absolute latest software versions?",
    description: "This is a trade-off between stability and new features.",
    low_label: "I prefer stability",
    high_label: "I need cutting-edge",
    translations: {
        en: {
            text: "How important is having the absolute latest software versions?",
            description: "This is a trade-off between stability and new features.",
            low_label: "I prefer stability",
            high_label: "I need cutting-edge",
        },
        ru: {
            text: "Насколько важно иметь самые последние версии программного обеспечения?",
            description: "Это компромисс между стабильностью и новыми функциями.",
            low_label: "Я предпочитаю стабильность",
            high_label: "Мне нужны самые новые технологии",
        }
    }
  },
  {
    id: "customization",
    text: "How much do you enjoy customizing your system's look and feel?",
    description: "Do you want something that just works, or a blank canvas?",
    low_label: "I prefer great defaults",
    high_label: "I want to tweak everything",
    translations: {
        en: {
            text: "How much do you enjoy customizing your system's look and feel?",
            description: "Do you want something that just works, or a blank canvas?",
            low_label: "I prefer great defaults",
            high_label: "I want to tweak everything",
        },
        ru: {
            text: "Насколько вам нравится настраивать внешний вид и функциональность вашей системы?",
            description: "Вы хотите что-то, что просто работает, или чистый холст?",
            low_label: "Я предпочитаю отличные настройки по умолчанию",
            high_label: "Я хочу настраивать все",
        }
    }
  },
  {
    id: "hardware_age",
    text: "How powerful is your computer?",
    description: "Some distributions are lighter on resources than others.",
    low_label: "Older / Low-power",
    high_label: "Modern / Powerful",
    translations: {
        en: {
            text: "How powerful is your computer?",
            description: "Some distributions are lighter on resources than others.",
            low_label: "Older / Low-power",
            high_label: "Modern / Powerful",
        },
        ru: {
            text: "Насколько мощный у вас компьютер?",
            description: "Некоторые дистрибутивы менее требовательны к ресурсам, чем другие.",
            low_label: "Старый / Маломощный",
            high_label: "Современный / Мощный",
        }
    }
  },
  {
    id: "ideology",
    text: "What is your stance on proprietary software?",
    description: "This relates to things like graphics drivers, codecs, and certain apps.",
    low_label: "Include non-free software",
    high_label: "Free/Open Source only",
    translations: {
        en: {
            text: "What is your stance on proprietary software?",
            description: "This relates to things like graphics drivers, codecs, and certain apps.",
            low_label: "Include non-free software",
            high_label: "Free/Open Source only",
        },
        ru: {
            text: "Каково ваше отношение к проприетарному программному обеспечению?",
            description: "Это касается таких вещей, как драйверы для видеокарт, кодеки и некоторые приложения.",
            low_label: "Включать несвободное ПО",
            high_label: "Только свободное/открытое ПО",
        }
    }
  },
  {
    id: "enterprise",
    text: "Are you interested in enterprise-level features and paid support?",
    description: "Consider this if you're using it for critical business applications.",
    low_label: "No, community support is fine",
    high_label: "Yes, I need professional support",
    translations: {
        en: {
            text: "Are you interested in enterprise-level features and paid support?",
            description: "Consider this if you're using it for critical business applications.",
            low_label: "No, community support is fine",
            high_label: "Yes, I need professional support",
        },
        ru: {
            text: "Заинтересованы ли вы в функциях корпоративного уровня и платной поддержке?",
            description: "Рассмотрите этот вариант, если вы используете его для критически важных бизнес-приложений.",
            low_label: "Нет, поддержки сообщества достаточно",
            high_label: "Да, мне нужна профессиональная поддержка",
        }
    }
  },
  {
    id: 'desktop_environment',
    text: 'What kind of desktop environment do you prefer?',
    description: 'Do you prefer a modern, feature-rich interface or a lightweight, minimal one?',
    low_label: 'Lightweight & Minimal',
    high_label: 'Modern & Feature-rich',
    translations: {
        en: {
            text: 'What kind of desktop environment do you prefer?',
            description: 'Do you prefer a modern, feature-rich interface or a lightweight, minimal one?',
            low_label: 'Lightweight & Minimal',
            high_label: 'Modern & Feature-rich',
        },
        ru: {
            text: 'Какую среду рабочего стола вы предпочитаете?',
            description: 'Вы предпочитаете современный, многофункциональный интерфейс или легкий, минималистичный?',
            low_label: 'Легкий и минималистичный',
            high_label: 'Современный и многофункциональный',
        }
    }
  },
  {
    id: 'package_manager',
    text: 'How do you feel about package managers?',
    description: 'Some systems have vast repositories, while others are more curated.',
    low_label: 'Simple & Straightforward',
    high_label: 'Powerful & Complex',
    translations: {
        en: {
            text: 'How do you feel about package managers?',
            description: 'Some systems have vast repositories, while others are more curated.',
            low_label: 'Simple & Straightforward',
            high_label: 'Powerful & Complex',
        },
        ru: {
            text: 'Как вы относитесь к менеджерам пакетов?',
            description: 'Некоторые системы имеют обширные репозитории, в то время как другие более тщательно подобраны.',
            low_label: 'Простой и понятный',
            high_label: 'Мощный и сложный',
        }
    }
  },
  {
    id: 'community_vs_corporate',
    text: 'Do you prefer a community-driven or corporate-backed distribution?',
    description: 'This can influence the philosophy and development speed of the distro.',
    low_label: 'Community-driven',
    high_label: 'Corporate-backed',
    translations: {
        en: {
            text: 'Do you prefer a community-driven or corporate-backed distribution?',
            description: 'This can influence the philosophy and development speed of the distro.',
            low_label: 'Community-driven',
            high_label: 'Corporate-backed',
        },
        ru: {
            text: 'Вы предпочитаете дистрибутив, управляемый сообществом или поддерживаемый корпорацией?',
            description: 'Это может влиять на философию и скорость разработки дистрибутива.',
            low_label: 'Управляемый сообществом',
            high_label: 'Поддерживаемый корпорацией',
        }
    }
  },
];

type DistroTranslation = {
    [lang in 'en' | 'ru']: {
        description: string;
    }
}

export type Distro = {
  id: string;
  name: string;
  description: string; // fallback
  website: string;
  profile: { [questionId: string]: number };
  translations: DistroTranslation;
};

export const distros: Distro[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    description: "A user-friendly, popular choice with strong community and corporate backing. It 'just works' for most hardware and is a great starting point for new users.",
    website: "https://ubuntu.com/",
    profile: {
      experience: 15,
      primary_use: 40,
      latest_software: 60,
      customization: 30,
      hardware_age: 70,
      ideology: 20,
      enterprise: 70,
      desktop_environment: 80,
      package_manager: 30,
      community_vs_corporate: 90,
    },
    translations: {
        en: {
            description: "A user-friendly, popular choice with strong community and corporate backing. It 'just works' for most hardware and is a great starting point for new users."
        },
        ru: {
            description: "Удобный и популярный выбор с сильной поддержкой сообщества и корпораций. Он «просто работает» на большинстве оборудования и является отличной отправной точкой для новых пользователей."
        }
    }
  },
  {
    id: "debian",
    name: "Debian",
    description: "The rock-solid foundation for many other distributions (including Ubuntu). Known for its extreme stability and commitment to free software. A great choice for servers.",
    website: "https://www.debian.org/",
    profile: {
      experience: 60,
      primary_use: 80,
      latest_software: 10,
      customization: 60,
      hardware_age: 40,
      ideology: 95,
      enterprise: 40,
      desktop_environment: 50,
      package_manager: 40,
      community_vs_corporate: 10,
    },
    translations: {
        en: {
            description: "The rock-solid foundation for many other distributions (including Ubuntu). Known for its extreme stability and commitment to free software. A great choice for servers."
        },
        ru: {
            description: "Надежная основа для многих других дистрибутивов (включая Ubuntu). Известен своей чрезвычайной стабильностью и приверженностью свободному программному обеспечению. Отличный выбор для серверов."
        }
    }
  },
  {
    id: "mint",
    name: "Linux Mint",
    description: "Built on Ubuntu, Mint focuses on providing a classic, refined desktop experience out of the box. It's incredibly user-friendly and comes with many conveniences pre-installed.",
    website: "https://linuxmint.com/",
    profile: {
      experience: 10,
      primary_use: 20,
      latest_software: 50,
      customization: 20,
      hardware_age: 60,
      ideology: 10,
      enterprise: 10,
      desktop_environment: 70,
      package_manager: 20,
      community_vs_corporate: 40,
    },
    translations: {
        en: {
            description: "Built on Ubuntu, Mint focuses on providing a classic, refined desktop experience out of the box. It's incredibly user-friendly and comes with many conveniences pre-installed."
        },
        ru: {
            description: "Основанный на Ubuntu, Mint ориентирован на предоставление классического, изысканного рабочего стола «из коробки». Он невероятно удобен в использовании и поставляется с множеством предустановленных удобств."
        }
    }
  },
  {
    id: "manjaro",
    name: "Manjaro",
    description: "Based on Arch Linux, Manjaro provides access to cutting-edge software while being much more user-friendly. It offers the power of Arch with an easier setup.",
    website: "https://manjaro.org/",
    profile: {
      experience: 50,
      primary_use: 60,
      latest_software: 90,
      customization: 70,
      hardware_age: 80,
      ideology: 30,
      enterprise: 20,
      desktop_environment: 85,
      package_manager: 80,
      community_vs_corporate: 20,
    },
    translations: {
        en: {
            description: "Based on Arch Linux, Manjaro provides access to cutting-edge software while being much more user-friendly. It offers the power of Arch with an easier setup."
        },
        ru: {
            description: "Основанный на Arch Linux, Manjaro предоставляет доступ к самому современному программному обеспечению, будучи при этом гораздо более удобным для пользователя. Он предлагает мощь Arch с более простой настройкой."
        }
    }
  },
  {
    id: "arch",
    name: "Arch Linux",
    description: "A lightweight and flexible distribution for competent users who want to build their system from the ground up. It follows a 'Keep It Simple' philosophy and has an excellent wiki.",
    website: "https://archlinux.org/",
    profile: {
      experience: 90,
      primary_use: 90,
      latest_software: 100,
      customization: 95,
      hardware_age: 60,
      ideology: 50,
      enterprise: 10,
      desktop_environment: 20,
      package_manager: 90,
      community_vs_corporate: 5,
    },
    translations: {
        en: {
            description: "A lightweight and flexible distribution for competent users who want to build their system from the ground up. It follows a 'Keep It Simple' philosophy and has an excellent wiki."
        },
        ru: {
            description: "Легкий и гибкий дистрибутив для компетентных пользователей, которые хотят построить свою систему с нуля. Он следует философии «Keep It Simple» и имеет отличную вики."
        }
    }
  },
  {
    id: "gentoo",
    name: "Gentoo",
    description: "The ultimate distribution for customization and optimization. Gentoo builds everything from source code, allowing for a system tailored exactly to your hardware and needs. For experts only.",
    website: "https://www.gentoo.org/",
    profile: {
      experience: 100,
      primary_use: 100,
      latest_software: 95,
      customization: 100,
      hardware_age: 50,
      ideology: 60,
      enterprise: 10,
      desktop_environment: 10,
      package_manager: 100,
      community_vs_corporate: 1,
    },
    translations: {
        en: {
            description: "The ultimate distribution for customization and optimization. Gentoo builds everything from source code, allowing for a system tailored exactly to your hardware and needs. For experts only."
        },
        ru: {
            description: "Идеальный дистрибутив для настройки и оптимизации. Gentoo собирает все из исходного кода, что позволяет создать систему, точно настроенную под ваше оборудование и потребности. Только для экспертов."
        }
    }
  },
  {
    id: "fedora",
    name: "Fedora",
    description: "A community-driven project sponsored by Red Hat. Fedora is known for being innovative and adopting new technologies early. It's a great balance of new features and stability.",
    website: "https://fedoraproject.org/",
    profile: {
      experience: 40,
      primary_use: 70,
      latest_software: 85,
      customization: 50,
      hardware_age: 90,
      ideology: 80,
      enterprise: 60,
      desktop_environment: 90,
      package_manager: 70,
      community_vs_corporate: 70,
    },
    translations: {
        en: {
            description: "A community-driven project sponsored by Red Hat. Fedora is known for being innovative and adopting new technologies early. It's a great balance of new features and stability."
        },
        ru: {
            description: "Проект, управляемый сообществом и спонсируемый Red Hat. Fedora известна своими инновациями и ранним внедрением новых технологий. Это отличный баланс между новыми функциями и стабильностью."
        }
    }
  },
  {
    id: "redhat",
    name: "Red Hat Enterprise Linux",
    description: "The leading enterprise Linux platform, known for its stability, security, and long-term paid support. It's the standard for corporate servers and critical infrastructure. A developer subscription is free.",
    website: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    profile: {
      experience: 70,
      primary_use: 95,
      latest_software: 20,
      customization: 40,
      hardware_age: 80,
      ideology: 40,
      enterprise: 100,
      desktop_environment: 60,
      package_manager: 60,
      community_vs_corporate: 100,
    },
    translations: {
        en: {
            description: "The leading enterprise Linux platform, known for its stability, security, and long-term paid support. It's the standard for corporate servers and critical infrastructure. A developer subscription is free."
        },
        ru: {
            description: "Ведущая корпоративная платформа Linux, известная своей стабильностью, безопасностью и долгосрочной платной поддержкой. Это стандарт для корпоративных серверов и критически важной инфраструктуры. Подписка для разработчиков бесплатна."
        }
    }
  },
  {
    id: "lfs",
    name: "Linux From Scratch",
    description: "Not a distribution, but a book that guides you to build your own custom Linux system from source. This is a purely educational project for those who want to understand Linux inside and out.",
    website: "https://www.linuxfromscratch.org/",
    profile: {
      experience: 101, // give it a slight edge for experts
      primary_use: 100,
      latest_software: 100,
      customization: 101, // same here
      hardware_age: 50,
      ideology: 50,
      enterprise: 0,
      desktop_environment: 50,
      package_manager: 0,
      community_vs_corporate: 0,
    },
    translations: {
        en: {
            description: "Not a distribution, but a book that guides you to build your own custom Linux system from source. This is a purely educational project for those who want to understand Linux inside and out."
        },
        ru: {
            description: "Это не дистрибутив, а книга, которая поможет вам собрать собственную систему Linux из исходного кода. Это чисто образовательный проект для тех, кто хочет понять Linux изнутри."
        }
    }
  },
  {
    id: "nixos",
    name: "NixOS",
    description: "A powerful distribution built on a purely functional package manager. It allows for reproducible, declarative, and reliable systems. Ideal for developers and system administrators.",
    website: "https://nixos.org/",
    profile: {
      experience: 80,
      primary_use: 90,
      latest_software: 80,
      customization: 20,
      hardware_age: 40,
      ideology: 70,
      enterprise: 15,
      desktop_environment: 20,
      package_manager: 50,
      community_vs_corporate: 15,
    },
    translations: {
        en: {
            description: "A powerful distribution built on a purely functional package manager. It allows for reproducible, declarative, and reliable systems. Ideal for developers and system administrators."
        },
        ru: {
            description: "Мощный дистрибутив, построенный на чисто функциональном менеджере пакетов. Он обеспечивает воспроизводимые, декларативные и надежные системы. Идеально подходит для разработчиков и системных администраторов."
        }
    }
  },
];

export function calculateScores(answers: { [questionId: string]: number }): Array<Distro & { score: number }> {
  const results = distros.map(distro => {
    let totalDifference = 0;
    for (const question of questions) {
      const userAnswer = answers[question.id] ?? 50;
      const distroValue = distro.profile[question.id] ?? 50;
      totalDifference += Math.abs(userAnswer - distroValue);
    }
    
    const maxDifference = 100 * questions.length;
    const matchPercentage = 100 - (totalDifference / maxDifference) * 100;
    
    return { ...distro, score: Math.round(matchPercentage) };
  });

  return results.sort((a, b) => b.score - a.score);
}
