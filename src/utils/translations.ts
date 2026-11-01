export type Language = 'en' | 'hi';

export interface Translations {
  nav: {
    brand: string;
    couple: string;
    countdown: string;
    ceremony: string;
    venue: string;
    rsvp: string;
    originalCard: string;
    originalCardShort: string;
    musicOn: string;
    musicOff: string;
    musicAriaOn: string;
    musicAriaOff: string;
    langToggle: string;
    mantraPhase: string;
    celebrationPhase: string;
    switchToMantra: string;
    switchToCelebration: string;
    phase1Tag: string;
    phase2Tag: string;
  };
  envelope: {
    invocation: string;
    ancestorBlessing: string;
    invitationType: string;
    coupleNames: string;
    eventDate: string;
    openBtn: string;
    musicHint: string;
  };
  hero: {
    invocation: string;
    invitedText: string;
    ceremonyTag: string;
    quote: string;
    date: string;
    day: string;
    venue: string;
    viewInvitationCard: string;
    discoverMore: string;
  };
  couple: {
    pretitle: string;
    heading: string;
    brideLabel: string;
    brideName: string;
    brideDaughterOf: string;
    brideParents: string;
    brideDesc: string;
    groomLabel: string;
    groomName: string;
    groomSonOf: string;
    groomParents: string;
    groomDesc: string;
    bottomBlessing: string;
  };
  countdown: {
    pretitle: string;
    heading: string;
    supportingText: string;
    eventTime: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    celebrationBegunTitle: string;
    celebrationBegunDesc: string;
    addGoogleCalendar: string;
    downloadIcs: string;
    shareInvitation: string;
    linkCopied: string;
  };
  event: {
    pretitle: string;
    heading: string;
    supportingText: string;
    cards: {
      event: { label: string; value: string; subtext: string };
      date: { label: string; value: string; subtext: string };
      day: { label: string; value: string; subtext: string };
      time: { label: string; value: string; subtext: string };
    };
    muhuratPretitle: string;
    muhuratHeading: string;
    itinerary: Array<{
      time: string;
      title: string;
      desc: string;
      icon: string;
    }>;
    suggestedAttireLabel: string;
    suggestedAttireText: string;
    blessingsLabel: string;
    blessingsText: string;
  };
  venue: {
    pretitle: string;
    heading: string;
    supportingText: string;
    tag: string;
    venueTitle: string;
    addressLine1: string;
    addressLine2: string;
    parkingTitle: string;
    parkingDesc: string;
    landmarkTitle: string;
    landmarkDesc: string;
    getDirections: string;
    copyAddress: string;
    copied: string;
    liveMapTitle: string;
    openGoogleMaps: string;
  };
  rsvp: {
    pretitle: string;
    heading: string;
    supportingText: string;
    familyTag: string;
    directContact: string;
    tapToCall: string;
    confirmWhatsApp1: string;
    confirmWhatsApp2: string;
    closingBlessing: string;
  };
  footer: {
    presenceMessage: string;
    excitedMessage: string;
    withLove: string;
    coupleSignature: string;
    originalCard: string;
    share: string;
    dateVenue: string;
    backToTop: string;
  };
  modal: {
    title: string;
    downloadCard: string;
    close: string;
    cardSubtext: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      brand: "AKSHITA & RAMIT",
      couple: "THE COUPLE",
      countdown: "MOMENTS UNTIL FOREVER",
      ceremony: "CEREMONY",
      venue: "VENUE",
      rsvp: "RSVP",
      originalCard: "ORIGINAL CARD",
      originalCardShort: "CARD",
      musicOn: "MUSIC ON",
      musicOff: "MUSIC OFF",
      musicAriaOn: "Mute music",
      musicAriaOff: "Play music",
      langToggle: "हिन्दी",
      mantraPhase: "MANTRA",
      celebrationPhase: "CELEBRATION BEATS",
      switchToMantra: "Mantra 🪔",
      switchToCelebration: "DJ Beats ⚡",
      phase1Tag: "Phase 1: Ganesh Mantra & Shankh Naad",
      phase2Tag: "Phase 2: High-Energy DJ Celebration",
    },
    envelope: {
      invocation: "॥ SHREE GANESHAY NAMAH ॥",
      ancestorBlessing: "With the divine blessings of our beloved family & ancestors",
      invitationType: "RING CEREMONY INVITATION",
      coupleNames: "AKSHITA & RAMIT",
      eventDate: "23 NOVEMBER 2026 • MEERUT",
      openBtn: "OPEN YOUR INVITATION",
      musicHint: "Tap to begin the sacred Ganesh Mantra with Shankh Naad & DJ celebration beats",
    },
    hero: {
      invocation: "॥ SHREE GANESHAY NAMAH ॥",
      invitedText: "You are cordially invited to celebrate the union of",
      ceremonyTag: "The Ring Ceremony",
      quote: '"Two souls bound by love, uniting in eternal promise"',
      date: "23 NOVEMBER 2026",
      day: "MONDAY",
      venue: "CHAUDHARY FARM HOUSE, ROHTA ROAD",
      viewInvitationCard: "VIEW & DOWNLOAD INVITATION CARD",
      discoverMore: "DISCOVER THE CEREMONY",
    },
    couple: {
      pretitle: "Auspicious Union",
      heading: "TWO HEARTS, ONE BEAUTIFUL JOURNEY",
      brideLabel: "THE BRIDE",
      brideName: "AKSHITA SINGH",
      brideDaughterOf: "Daughter of",
      brideParents: "Mrs. Dhanwati & Mr. Rajender",
      brideDesc: '"Graceful, kind, and radiating warmth — ready to embark on a lifetime of joy and devotion."',
      groomLabel: "THE GROOM",
      groomName: "RAMIT SINGH",
      groomSonOf: "Son of",
      groomParents: "Mrs. Chaand & Mr. Neeraj",
      groomDesc: '"Noble, steadfast, and caring — eagerly anticipating celebrating this auspicious occasion with all of you."',
      bottomBlessing: '"With the blessings of our parents, grandparents, and loved ones, we invite you to be part of our most treasured day as we exchange our engagement rings."',
    },
    countdown: {
      pretitle: "Save The Auspicious Date",
      heading: "Moments Until Forever",
      supportingText: "The celebration of love, togetherness and new beginnings is almost here.",
      eventTime: "23 November 2026 • 10:00 AM IST onwards",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
      celebrationBegunTitle: "The Celebration Has Begun!",
      celebrationBegunDesc: "Akshita & Ramit are celebrating their Ring Ceremony at Chaudhary Farm House, Meerut.",
      addGoogleCalendar: "ADD TO GOOGLE CALENDAR",
      downloadIcs: "DOWNLOAD .ICS INVITE",
      shareInvitation: "SHARE INVITATION",
      linkCopied: "LINK COPIED!",
    },
    event: {
      pretitle: "Ceremony Schedule",
      heading: "THE CEREMONY DETAILS",
      supportingText: "Every moment thoughtfully planned for love, joy, and unforgettable memories",
      cards: {
        event: {
          label: "EVENT",
          value: "RING CEREMONY",
          subtext: "Auspicious Engagement & Blessings",
        },
        date: {
          label: "DATE",
          value: "23 NOVEMBER 2026",
          subtext: "Margashirsha, Shubh Muhurat",
        },
        day: {
          label: "DAY",
          value: "MONDAY",
          subtext: "Somwar • An auspicious beginning",
        },
        time: {
          label: "TIME",
          value: "10:00 AM ONWARDS",
          subtext: "Followed by Royal Feast & Lunch",
        },
      },
      muhuratPretitle: "Shubh Muhurat",
      muhuratHeading: "Auspicious Flow of the Day",
      itinerary: [
        {
          time: "10:00 AM",
          title: "Swagat & Tilak Rasam",
          desc: "Traditional welcome of family, esteemed guests, and heartfelt greetings with floral rose petal showers.",
          icon: "🌺",
        },
        {
          time: "11:30 AM",
          title: "Sacred Ring Exchange",
          desc: "Akshita & Ramit exchange engagement rings amidst Vedic mantras, family blessings, and shahnai melodies.",
          icon: "💍",
        },
        {
          time: "01:00 PM",
          title: "Royal Celebration & Feast",
          desc: "Sumptuous multi-cuisine traditional Indian lunch, sweet delights, music, and joyful photography sessions.",
          icon: "🍛",
        },
      ],
      suggestedAttireLabel: "SUGGESTED ATTIRE:",
      suggestedAttireText: "Traditional Indian / Festive Elegance (Pastels, Peach, Champagne & Gold)",
      blessingsLabel: "BLESSINGS:",
      blessingsText: "Your warm presence is the greatest gift to the couple",
    },
    venue: {
      pretitle: "Location & Directions",
      heading: "THE CELEBRATION DESTINATION",
      supportingText: "An auspicious open-air farmhouse setting in Meerut, ready to welcome you in royal celebration",
      tag: "VENUE OF CELEBRATION",
      venueTitle: "CHAUDHARY FARM HOUSE, ROHTA ROAD",
      addressLine1: "ROHTA ROAD, MEERUT",
      addressLine2: "Uttar Pradesh, India",
      parkingTitle: "Ample Guest Parking:",
      parkingDesc: "Dedicated parking inside the farmhouse premises for all cars and vehicles.",
      landmarkTitle: "Landmark Guidance:",
      landmarkDesc: "Conveniently located directly on main Rohta Road, Meerut, easily accessible from Meerut City & Bypass.",
      getDirections: "GET DIRECTIONS",
      copyAddress: "COPY ADDRESS",
      copied: "COPIED",
      liveMapTitle: "CHAUDHARY FARM HOUSE, ROHTA ROAD • LIVE MAP",
      openGoogleMaps: "Open in Google Maps",
    },
    rsvp: {
      pretitle: "Family Cordial Welcome",
      heading: "FOR RSVP & QUERIES",
      supportingText: "We look forward to receiving your gracious presence and heartfelt blessings",
      familyTag: "RSVP • Family Members",
      directContact: "Direct Contact & Queries",
      tapToCall: "Tap to Call Now",
      confirmWhatsApp1: "CONFIRM RSVP VIA WHATSAPP",
      confirmWhatsApp2: "WHATSAPP TO 9719808209",
      closingBlessing: '"Your blessings and gracious presence are deeply requested to illuminate our celebration."',
    },
    footer: {
      presenceMessage: '"YOUR PRESENCE WILL MAKE OUR CELEBRATION EVEN MORE SPECIAL."',
      excitedMessage: '"WE CAN\'T WAIT TO CELEBRATE WITH YOU!"',
      withLove: "With Love & Gratitude",
      coupleSignature: "AKSHITA & RAMIT",
      originalCard: "Original Invitation Card",
      share: "Share",
      dateVenue: "23 November 2026 • Chaudhary Farm House, Meerut",
      backToTop: "Back to Top",
    },
    modal: {
      title: "Original Ring Ceremony Card",
      downloadCard: "Download original card",
      close: "Close",
      cardSubtext: "23 NOVEMBER 2026 • CHAUDHARY FARM HOUSE, MEERUT",
    },
  },
  hi: {
    nav: {
      brand: "अक्षिता एवं रमित",
      couple: "युगल परिचय",
      countdown: "शुभ घड़ी",
      ceremony: "शुभ कार्यक्रम",
      venue: "आयोजन स्थल",
      rsvp: "दर्शनार्थी",
      originalCard: "मूल निमंत्रण",
      originalCardShort: "कार्ड",
      musicOn: "संगीत चालू",
      musicOff: "संगीत बंद",
      musicAriaOn: "संगीत म्यूट करें",
      musicAriaOff: "संगीत चलाएं",
      langToggle: "English",
      mantraPhase: "गणेश मंत्र",
      celebrationPhase: "उत्सव संगीत",
      switchToMantra: "मंत्र 🪔",
      switchToCelebration: "डीजे उत्सव ⚡",
      phase1Tag: "चरण १: गणेश मंत्र एवं शंखनाद",
      phase2Tag: "चरण २: डीजे उत्सव संगीत",
    },
    envelope: {
      invocation: "॥ श्री गणेशाय नमः ॥",
      ancestorBlessing: "परम आदरणीय पूर्वजों एवं कुलदेवता के पावन आशीर्वाद से",
      invitationType: "अंगूठी रस्म (सगाई) आमंत्रण पत्र",
      coupleNames: "अक्षिता एवं रमित",
      eventDate: "२३ नवम्बर २०२६ • मेरठ",
      openBtn: "शुभ आमंत्रण पत्र खोलें",
      musicHint: "पवित्र गणेश मंत्र व शंखनाद, तत्पश्चात भव्य उत्सव संगीत के साथ अनुभव करें",
    },
    hero: {
      invocation: "॥ श्री गणेशाय नमः ॥",
      invitedText: "आप सादर आमंत्रित हैं हमारे प्रिय युगल के शुभ सगाई समारोह में",
      ceremonyTag: "अंगूठी रस्म समारोह",
      quote: '"दो पवित्र हृदयों का पावन बंधन, प्रेम व समर्पण का अटूट संकल्प"',
      date: "२३ नवम्बर २०२६",
      day: "सोमवार",
      venue: "चौधरी फार्म हाउस, रोहटा रोड",
      viewInvitationCard: "आमंत्रण पत्र देखें व डाउनलोड करें",
      discoverMore: "समारोह की जानकारी देखें",
    },
    couple: {
      pretitle: "शुभ मंगल मिलन",
      heading: "दो दिल, एक पावन जीवन यात्रा",
      brideLabel: "वधू",
      brideName: "अक्षिता सिंह",
      brideDaughterOf: "सुपुत्री",
      brideParents: "श्रीमती धनवती एवं श्री राजेंद्र सिंह",
      brideDesc: '"सौम्य, स्नेहमयी और आत्मीय — जीवन के इस नए स्वर्णिम अध्याय की ओर सप्रेम अग्रसर।"',
      groomLabel: "वर",
      groomName: "रमित सिंह",
      groomSonOf: "सुपुत्र",
      groomParents: "श्रीमती चाँद एवं श्री नीरज सिंह",
      groomDesc: '"सज्जन, कर्मठ और संवेदनशील — आप सभी स्नेहीजनों के साथ इस पावन पर्व को मनाने हेतु उत्सुक।"',
      bottomBlessing: '"माता-पिता, गुरुजनों एवं प्रियजनों के मंगलमय आशीष से, हम आपको हमारे सगाई समारोह में सादर आमंत्रित करते हैं।"',
    },
    countdown: {
      pretitle: "शुभ मंगल तिथि",
      heading: "शुभ घड़ी का इंतज़ार",
      supportingText: "प्रेम, समर्पण और नए सफर की शुरुआत का पावन उत्सव अब अति निकट है।",
      eventTime: "२३ नवम्बर २०२६ • प्रातः १०:०० बजे से",
      days: "दिन",
      hours: "घंटे",
      minutes: "मिनट",
      seconds: "सेकंड",
      celebrationBegunTitle: "शुभ उत्सव प्रारंभ हो चुका है!",
      celebrationBegunDesc: "अक्षिता एवं रमित का सगाई समारोह चौधरी फार्म हाउस, मेरठ में हर्षोल्लास से जारी है।",
      addGoogleCalendar: "गूगल कैलेंडर में जोड़ें",
      downloadIcs: "कैलेंडर आमंत्रण डाउनलोड करें",
      shareInvitation: "निमंत्रण साझा करें",
      linkCopied: "लिंक कॉपी हो गया!",
    },
    event: {
      pretitle: "शुभ कार्यक्रम विवरण",
      heading: "समारोह का विस्तृत कार्यक्रम",
      supportingText: "हर क्षण प्रेम, आनंद और मधुर स्मृतियों से परिपूर्ण",
      cards: {
        event: {
          label: "कार्यक्रम",
          value: "अंगूठी रस्म (सगाई)",
          subtext: "शुभ सगाई एवं आशीर्वाद",
        },
        date: {
          label: "दिनांक",
          value: "२३ नवम्बर २०२६",
          subtext: "मार्गशीर्ष, शुभ मुहूर्त",
        },
        day: {
          label: "वार",
          value: "सोमवार",
          subtext: "सोमवार • शुभ शुभारंभ",
        },
        time: {
          label: "समय",
          value: "प्रातः १०:०० बजे से",
          subtext: "तत्पश्चात भव्य प्रीतिभोज",
        },
      },
      muhuratPretitle: "शुभ मुहूर्त",
      muhuratHeading: "दिन की शुभ रूपरेखा",
      itinerary: [
        {
          time: "प्रातः १०:००",
          title: "स्वागत एवं तिलक रस्म",
          desc: "कुटुंब एवं आदरणीय अतिथियों का पारंपरिक स्वागत, पुष्प वर्षा एवं आत्मीय अभिनंदन।",
          icon: "🌺",
        },
        {
          time: "प्रातः ११:३०",
          title: "पावन अंगूठी विनिमय",
          desc: "वैदिक मंत्रोच्चार, शहनाई वादन एवं परिवारजनों के आशीर्वाद के मध्य सगाई अंगूठी रस्म।",
          icon: "💍",
        },
        {
          time: "दोपहर ०१:००",
          title: "शाही प्रीतिभोज एवं आशीर्वचन",
          desc: "स्वादिष्ट पारंपरिक भारतीय व्यंजन, मधुर संगीत, छायाचित्र एवं आनंदोत्सव।",
          icon: "🍛",
        },
      ],
      suggestedAttireLabel: "सुझाई गई पोशाक:",
      suggestedAttireText: "पारंपरिक भारतीय / उत्सव परिधान (पेस्टल, पीच, शैम्पेन एवं सुनहरा)",
      blessingsLabel: "शुभकामनाएं:",
      blessingsText: "आपकी स्नेहमयी उपस्थिति ही युगल के लिए सबसे अनमोल उपहार है",
    },
    venue: {
      pretitle: "स्थान व मार्गदर्शन",
      heading: "आयोजन स्थल",
      supportingText: "मेरठ का भव्य फार्म हाउस परिसर, आपके स्वागत हेतु सज्ज",
      tag: "समारोह स्थल",
      venueTitle: "चौधरी फार्म हाउस, रोहटा रोड",
      addressLine1: "रोहटा रोड, मेरठ",
      addressLine2: "उत्तर प्रदेश, भारत",
      parkingTitle: "विशाल पार्किंग व्यवस्था:",
      parkingDesc: "फार्म हाउस परिसर के अंदर सभी चौपहिया व दोपहिया वाहनों हेतु सुरक्षित पार्किंग।",
      landmarkTitle: "मार्गदर्शन:",
      landmarkDesc: "मुख्य रोहटा रोड, मेरठ पर स्थित, मेरठ शहर व बाईपास से अत्यंत सुगम आवागमन।",
      getDirections: "गूगल मैप्स दिशा-निर्देश (GET DIRECTIONS)",
      copyAddress: "पता कॉपी करें",
      copied: "कॉपी हुआ",
      liveMapTitle: "चौधरी फार्म हाउस, रोहटा रोड • लाइव मैप",
      openGoogleMaps: "गूगल मैप्स में खोलें",
    },
    rsvp: {
      pretitle: "स्वागतकर्ता एवं विनीत",
      heading: "दर्शनार्थी एवं संपर्क",
      supportingText: "आपकी स्नेहमयी उपस्थिति एवं मंगल आशीष के आकांक्षी",
      familyTag: "विनीत • समस्त परिवार",
      directContact: "सीधा संपर्क सूत्र",
      tapToCall: "कॉल करने के लिए टैप करें",
      confirmWhatsApp1: "व्हाट्सएप द्वारा उपस्थिति पुष्टि करें",
      confirmWhatsApp2: "व्हाट्सएप 9719808209 पर भेजें",
      closingBlessing: '"समारोह की शोभा बढ़ाने हेतु आपकी मंगलमय उपस्थिति सादर प्रार्थनीय है।"',
    },
    footer: {
      presenceMessage: '"आपकी गरिमामयी उपस्थिति हमारे उत्सव को और भी मंगलमय बनाएगी।"',
      excitedMessage: '"आपके स्वागत हेतु हम अत्यंत उत्सुक हैं!"',
      withLove: "सप्रेम विनीत",
      coupleSignature: "अक्षिता एवं रमित",
      originalCard: "मूल निमंत्रण कार्ड",
      share: "साझा करें",
      dateVenue: "२३ नवम्बर २०२६ • चौधरी फार्म हाउस, मेरठ",
      backToTop: "शीर्ष पर जाएं",
    },
    modal: {
      title: "मूल अंगूठी रस्म आमंत्रण पत्र",
      downloadCard: "मूल कार्ड डाउनलोड करें",
      close: "बंद करें",
      cardSubtext: "२३ नवम्बर २०२६ • चौधरी फार्म हाउस, मेरठ",
    },
  },
};
