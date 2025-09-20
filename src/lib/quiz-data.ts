
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
      latest_software: 20,
      customization: 30,
      hardware_age: 70,
      ideology: 20,
      enterprise: 70,
      desktop_environment: 80,
      package_manager: 20,
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
      latest_software: 0,
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
      latest_software: 20,
      customization: 20,
      hardware_age: 60,
      ideology: 10,
      enterprise: 10,
      desktop_environment: 80,
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
      latest_software: 95,
      customization: 95,
      hardware_age: 60,
      ideology: 50,
      enterprise: 10,
      desktop_environment: 30,
      package_manager: 20,
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
      experience: 90,
      primary_use: 100,
      latest_software: 70,
      customization: 100,
      hardware_age: 90,
      ideology: 60,
      enterprise: 10,
      desktop_environment: 30,
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
      latest_software: 75,
      customization: 50,
      hardware_age: 90,
      ideology: 80,
      enterprise: 60,
      desktop_environment: 90,
      package_manager: 60,
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
      latest_software: 10,
      customization: 40,
      hardware_age: 80,
      ideology: 30,
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
      experience: 85,
      primary_use: 95,
      latest_software: 100,
      customization: 10,
      hardware_age: 70,
      ideology: 40,
      enterprise: 30,
      desktop_environment: 30,
      package_manager: 100,
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
  {
    id: "guixsd",
    name: "GuixSD",
    description: "A powerful distribution built on a purely functional package manager. It allows for reproducible, declarative, and reliable systems. Ideal for developers and system administrators.",
    website: "https://guix.gnu.org/",
    profile: {
      experience: 95,
      primary_use: 95,
      latest_software: 40,
      customization: 10,
      hardware_age: 70,
      ideology: 100,
      enterprise: 0,
      desktop_environment: 50,
      package_manager: 100,
      community_vs_corporate: 0,
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
  {
    id: "opensuse",
    name: "openSUSE",
    description: "A stable, feature-rich distribution known for its excellent administration tools like YaST. Offers both rolling release (Tumbleweed) and fixed release (Leap) options.",
    website: "https://www.opensuse.org/",
    profile: {
      experience: 65,
      primary_use: 70,
      latest_software: 60,
      customization: 60,
      hardware_age: 80,
      ideology: 70,
      enterprise: 80,
      desktop_environment: 80,
      package_manager: 70,
      community_vs_corporate: 60,
    },
    translations: {
        en: {
            description: "A stable, feature-rich distribution known for its excellent administration tools like YaST. Offers both rolling release (Tumbleweed) and fixed release (Leap) options."
        },
        ru: {
            description: "Стабильный, многофункциональный дистрибутив, известный своими отличными инструментами администрирования, такими как YaST. Предлагает как rolling release (Tumbleweed), так и фиксированные релизы (Leap)."
        }
    }
  },
  {
    id: "pop_os",
    name: "Pop!_OS",
    description: "A modern distribution optimized for developers and gamers. Built on Ubuntu but with a focus on productivity, gaming, and professional workflows.",
    website: "https://pop.system76.com/",
    profile: {
      experience: 20,
      primary_use: 50,
      latest_software: 80,
      customization: 40,
      hardware_age: 90,
      ideology: 20,
      enterprise: 30,
      desktop_environment: 90,
      package_manager: 20,
      community_vs_corporate: 30,
    },
    translations: {
        en: {
            description: "A modern distribution optimized for developers and gamers. Built on Ubuntu but with a focus on productivity, gaming, and professional workflows."
        },
        ru: {
            description: "Современный дистрибутив, оптимизированный для разработчиков и геймеров. Основан на Ubuntu, но с фокусом на продуктивность, игры и профессиональные рабочие процессы."
        }
    }
  },
  {
    id: "elementary",
    name: "Elementary OS",
    description: "A beautiful, user-friendly distribution focused on design and simplicity. Built on Ubuntu with a custom desktop environment that prioritizes aesthetics and ease of use.",
    website: "https://elementary.io/",
    profile: {
      experience: 0,
      primary_use: 0,
      latest_software: 40,
      customization: 10,
      hardware_age: 70,
      ideology: 30,
      enterprise: 10,
      desktop_environment: 95,
      package_manager: 20,
      community_vs_corporate: 20,
    },
    translations: {
        en: {
            description: "A beautiful, user-friendly distribution focused on design and simplicity. Built on Ubuntu with a custom desktop environment that looks like macOS."
        },
        ru: {
            description: "Красивый, удобный дистрибутив, ориентированный на дизайн и простоту. Основан на Ubuntu с собственным DE  с закосом на macOS."
        }
    }
  },
  {
    id: "zorin",
    name: "Zorin OS",
    description: "A Windows-like distribution designed to ease the transition from Windows to Linux. Offers familiar interface layouts and comes with Wine pre-installed.",
    website: "https://zorin.com/os/",
    profile: {
      experience: 0,
      primary_use: 0,
      latest_software: 30,
      customization: 30,
      hardware_age: 70,
      ideology: 20,
      enterprise: 20,
      desktop_environment: 85,
      package_manager: 20,
      community_vs_corporate: 30,
    },
    translations: {
        en: {
            description: "A Windows-like distribution designed to ease the transition from Windows to Linux. Offers familiar interface layouts and comes with Wine pre-installed."
        },
        ru: {
            description: "Дистрибутив, похожий на Windows, предназначенный для облегчения перехода с Windows на Linux. Предлагает знакомый интерфейс и поставляется с предустановленным Wine."
        }
    }
  },
  {
    id: "mx_linux",
    name: "MX Linux",
    description: "A lightweight, fast distribution based on Debian stable. Known for its excellent performance on older hardware and comprehensive set of pre-installed tools.",
    website: "https://mxlinux.org/",
    profile: {
      experience: 10,
      primary_use: 20,
      latest_software: 20,
      customization: 70,
      hardware_age: 30,
      ideology: 40,
      enterprise: 20,
      desktop_environment: 60,
      package_manager: 20,
      community_vs_corporate: 20,
    },
    translations: {
        en: {
            description: "A lightweight, fast distribution based on Debian stable. Known for its excellent performance on older hardware and comprehensive set of pre-installed tools."
        },
        ru: {
            description: "Легкий, быстрый дистрибутив на основе стабильного Debian. Известен отличной производительностью на старом оборудовании и комплексным набором предустановленных инструментов."
        }
    }
  },
  {
    id: "solus",
    name: "Solus",
    description: "An independent, modern distribution built from scratch. Features a curated software selection, rolling release model, and focuses on desktop computing.",
    website: "https://getsol.us/",
    profile: {
      experience: 40,
      primary_use: 60,
      latest_software: 80,
      customization: 50,
      hardware_age: 80,
      ideology: 50,
      enterprise: 20,
      desktop_environment: 90,
      package_manager: 40,
      community_vs_corporate: 10,
    },
    translations: {
        en: {
            description: "An independent, modern distribution built from scratch. Features a curated software selection, rolling release model, and focuses on desktop computing."
        },
        ru: {
            description: "Независимый, современный дистрибутив, созданный с нуля. Имеет тщательно подобранный выбор программного обеспечения, модель rolling release и фокусируется на настольных вычислениях."
        }
    }
  },
  {
    id: "void",
    name: "Void Linux",
    description: "A lightweight, rolling release distribution with its own package manager (xbps). Known for its simplicity, speed, and independence from systemd.",
    website: "https://voidlinux.org/",
    profile: {
      experience: 50,
      primary_use: 80,
      latest_software: 75,
      customization: 80,
      hardware_age: 40,
      ideology: 60,
      enterprise: 5,
      desktop_environment: 10,
      package_manager: 50,
      community_vs_corporate: 5,
    },
    translations: {
        en: {
            description: "A lightweight, rolling release distribution with its own package manager (xbps). Known for its simplicity, speed, and independence from systemd."
        },
        ru: {
            description: "Легкий дистрибутив с rolling release и собственным менеджером пакетов (xbps). Известен своей простотой, скоростью и независимостью от systemd."
        }
    }
  },
  {
    id: "alpine",
    name: "Alpine Linux",
    description: "A security-oriented, lightweight distribution based on musl libc and BusyBox. Popular for containers, embedded systems, and security-focused applications.",
    website: "https://alpinelinux.org/",
    profile: {
      experience: 80,
      primary_use: 100,
      latest_software: 70,
      customization: 90,
      hardware_age: 0,
      ideology: 90,
      enterprise: 90,
      desktop_environment: 0,
      package_manager: 60,
      community_vs_corporate: 30,
    },
    translations: {
        en: {
            description: "A security-oriented, lightweight distribution based on musl libc and BusyBox. Popular for containers and embedded systems."
        },
        ru: {
            description: "Ориентированный на безопасность, легкий дистрибутив на основе musl libc и BusyBox. Популярен для контейнеров  и эмбеда."
        }
    }
  },
  {
    id: "slackware",
    name: "Slackware",
    description: "One of the oldest Linux distributions, known for its simplicity and Unix-like approach. Minimal and stable, but requires more manual configuration.",
    website: "https://www.slackware.com/",
    profile: {
      experience: 85,
      primary_use: 80,
      latest_software: 0,
      customization: 80,
      hardware_age: 0,
      ideology: 70,
      enterprise: 30,
      desktop_environment: 30,
      package_manager: 90,
      community_vs_corporate: 5,
    },
    translations: {
        en: {
            description: "One of the oldest Linux distributions, known for its simplicity and Unix-like approach. Minimal, old and stable, but requires manual configuration."
        },
        ru: {
            description: "Один из старейших дистрибутивов Linux, известный своей простотой и Unix-лайк подходом. Мелкий, древний и стабильный, но требует ручной настройки."
        }
    }
  },
  {
    id: "centos_stream",
    name: "CentOS Stream",
    description: "A rolling release distribution that serves as the upstream for Red Hat Enterprise Linux. Ideal for developers and system administrators who want to stay ahead of RHEL.",
    website: "https://www.centos.org/stream/",
    profile: {
      experience: 70,
      primary_use: 90,
      latest_software: 70,
      customization: 50,
      hardware_age: 80,
      ideology: 40,
      enterprise: 90,
      desktop_environment: 60,
      package_manager: 40,
      community_vs_corporate: 80,
    },
    translations: {
        en: {
            description: "A rolling release distribution that serves as the upstream for Red Hat Enterprise Linux. Ideal for developers and system administrators who want to stay ahead of RHEL."
        },
        ru: {
            description: "Дистрибутив с rolling release, который служит upstream для Red Hat Enterprise Linux. Идеально подходит для разработчиков и системных администраторов, которые хотят быть впереди RHEL."
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
