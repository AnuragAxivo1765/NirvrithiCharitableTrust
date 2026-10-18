/**
 * NEWS & EVENTS DATA — Nirvrithi Charitable Trust / Pookoya Thangal Hospice
 *
 * DATA FORMAT:
 * ─────────────────────────────────────────────
 * id          : string  — unique slug identifier
 * title       : string  — headline of the news item or event
 * excerpt     : string  — short summary for card display
 * content     : string  — full content with extracted details from authentic events
 * date        : string  — ISO date string (YYYY-MM-DD)
 * dateDisplay : string  — human-readable date for display
 * category    : string  — one of: 'News', 'Event', 'Announcement', 'Awareness', 'Community'
 * image       : string  — path to news/event photograph (assets/images/events/...)
 * featured    : boolean — if true, shown in home page preview
 * sortOrder   : number  — display order
 */

/* global NEWS_DATA */
const NEWS_DATA = [
  {
    "id": "grand-launch-organizing-committee-meeting",
    "title": "#PTH Mannancherry — #Grand Launch",
    "excerpt": "സംഘാടക സമിതി രൂപീകരണം — മണ്ണഞ്ചേരി ഗ്രാമ പഞ്ചായത്ത് മെമ്പർ ബി നിസാർ ഉത്ഘാടനം നിർവഹിക്കുന്നു.",
    "content": "#PTH Mannancherry\n#Grand Launch\n\nസംഘാടക സമിതി രൂപീകരണം \n\nമണ്ണഞ്ചേരി ഗ്രാമ പഞ്ചായത്ത് മെമ്പർ ബി നിസാർ ഉത്ഘാടനം നിർവഹിക്കുന്നു.",
    "date": "2026-09-15",
    "dateDisplay": "September 2026",
    "category": "Event",
    "image": "assets/images/events/27.jpeg",
    "featured": true,
    "sortOrder": 1
  },
  {
    "id": "womens-mayyith-care-training-class",
    "title": "വനിതകൾക്കുള്ള മയ്യത്ത് പരിപാലന ക്ലാസ്",
    "excerpt": "പൂക്കോയ തങ്ങൾ ഹോസ്പിസിൻ്റെ ആഭിമുഖ്യത്തിൽ വനിതകൾക്കുള്ള മയ്യത്ത് പരിപാലന ക്ലാസ് മണ്ണഞ്ചേരി ടൗൺ ജുമാ മസ്ജിദ് മദ്രസ ഹാളിൽ നടന്നു. 23 വനിതകൾ പങ്കെടുത്തു.",
    "content": "സെപ്റ്റംബർ.21,2026\nപൂക്കോയ തങ്ങൾ ഹോസ്പിസിൻ്റെ ആഭിമുഖ്യത്തിൽ വനിതകൾക്കുള്ള മയ്യത്ത് പരിപാലന ക്ലാസ് വളരെ നല്ല രീതിയിൽ മണ്ണഞ്ചേരി ടൗൺ ജുമാ മസ്ജിദ് മദ്രസ ഹാളിൽ നടന്നു.മുഹമ്മദ് മുസ്ലിഹ് ബാഖവി പ്രഭാഷണം നടത്തി.\n23 വനിതകൾ ക്ലാസ്സിൽ പങ്കെടുത്തു.",
    "date": "2026-09-21",
    "dateDisplay": "21 September 2026",
    "category": "Awareness",
    "image": "assets/images/events/26.png",
    "featured": true,
    "sortOrder": 2
  },
  {
    "id": "world-palliative-care-day-seminar-coverage",
    "title": "വളണ്ടിയർ - ആരോഗ്യ പ്രവർത്തക സംഗമം: ഡോ. സൈറു ഫിലിപ്പ് ഉദ്ഘാടനം ചെയ്തു",
    "excerpt": "ലോക പാലിയേറ്റീവ് ദിനത്തോടനുബന്ധിച്ച് സംഘടിപ്പിച്ച 'വേദനമുക്ത രോഗി' സെമിനാർ ഡോ. സൈറു ഫിലിപ്പ് ഉദ്ഘാടനം ചെയ്തു.",
    "content": "പൂക്കോയ തങ്ങൾ ഹോസ്പിസ് മണ്ണഞ്ചേരി യൂണിറ്റ് സംഘടിപ്പിച്ച വളണ്ടിയർമാരുടെയും ആരോഗ്യ പ്രവർത്തകരുടെയും സംഗമം ഡോ. സൈറു ഫിലിപ്പ് (പ്രിൻസിപ്പൽ, കണ്ണൂർ മെഡിക്കൽ കോളേജ്) ഉദ്ഘാടനം ചെയ്തു.\n\n'വേദനമുക്ത രോഗി' എന്ന വിഷയത്തിലായിരുന്നു സംഗമം. നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റ് ചെയർമാൻ എസ്. മുഹമ്മദ് ബഷീർ അധ്യക്ഷനായി. രോഗികളുടെ വേദനയും മാനസിക ബുദ്ധിമുട്ടുകളും ലഘൂകരിക്കുന്നതിൽ പാലിയേറ്റീവ് വളണ്ടിയർമാരുടെ പങ്കിനെക്കുറിച്ച് ഡോ. സൈറു ഫിലിപ്പ് വിശദീകരിച്ചു. ടി.എച്ച് നാസർ, ബി. നിസാർ, എം. ഷഫീഖ്, അനസ് യാസീൻ, നഹാസ് എം. തോപ്പിൽ, ഹംസ ആശാൻ എന്നിവർ പ്രസംഗിച്ചു.",
    "date": "2026-10-10",
    "dateDisplay": "10 October 2026",
    "category": "Awareness",
    "image": "assets/images/events/25.jpeg",
    "featured": false,
    "sortOrder": 3
  },
  {
    "id": "chandrika-coverage-pth-mannancherry-launch",
    "title": "കിടപ്പുരോഗികൾക്ക് ആശ്വാസകേന്ദ്രമായി പി.ടി.എച്ച് മണ്ണഞ്ചേരിയുടെ ഉദ്ഘാടനം: ചന്ദ്രിക വാർത്ത",
    "excerpt": "പാണക്കാട് സയ്യിദ് അബ്ബാസലി ശിഹാബ് തങ്ങൾ ഉദ്ഘാടനം നിർവഹിക്കുന്ന പി.ടി.എച്ച് മണ്ണഞ്ചേരിയെക്കുറിച്ച് ചന്ദ്രിക പത്രവാർത്ത.",
    "content": "കിടപ്പുരോഗികൾക്ക് ആശ്വാസകേന്ദ്രമായി പി.ടി.എച്ച് മണ്ണഞ്ചേരിയുടെ ഉദ്ഘാടനം പാണക്കാട് സയ്യിദ് അബ്ബാസലി ശിഹാബ് തങ്ങൾ നിർവഹിക്കുന്നതിനെക്കുറിച്ച് പ്രമുഖ ദിനപത്രമായ ചന്ദ്രിക (2026 ഒക്ടോബർ 17, കൊച്ചി എഡിഷൻ, പേജ് 13) റിപ്പോർട്ട് ചെയ്തു.\n\nആലപ്പുഴ ജില്ലയിലെ ആദ്യ കേന്ദ്രമായ മണ്ണഞ്ചേരി ചിയാംവെളി യൂണിറ്റിൽ കിടപ്പുരോഗികൾക്ക് ആശ്വാസമായി പരിചരണവും മാനസിക പിന്തുണയും ഉറപ്പുവരുത്താൻ പി.ടി.എച്ച് സേവനങ്ങൾ സജ്ജമാക്കിയിരിക്കുന്നു. ഹോം കെയർ യൂണിറ്റ് സമർപ്പണം പാണക്കാട് സയ്യിദ് അബ്ബാസലി ശിഹാബ് തങ്ങളും, ഓഫീസ് ഉദ്ഘാടനം അഡ്വ. ഹാരിസ് ബീരാൻ എം.പിയും, വെബ്സൈറ്റ് ലോഞ്ച് എ.ഡി. തോമസ് എം.എൽ.എയും നിർവഹിക്കുന്നു.",
    "date": "2026-10-17",
    "dateDisplay": "17 October 2026",
    "category": "News",
    "image": "assets/images/events/24.jpeg",
    "featured": false,
    "sortOrder": 4
  },
  {
    "id": "pth-mannancherry-grand-launch-centre-54",
    "title": "PTH Mannancherry Grand Launch: 1st Palliative Centre in Alappuzha (Centre 54)",
    "excerpt": "Panakkad Sayed Abbasali Shihab Thangal inaugurates PTH Mannancherry Centre 54 at Spring Auditorium, Chiyamveli.",
    "content": "The historic grand launch of Pookoya Thangal Hospice (PTH) Mannancherry—the 54th PTH Centre in Kerala and the very first in Alappuzha District—was held on Sunday, 18 October 2026 at 6:30 PM at Spring Auditorium, Panakkad Sayed Hyderali Shihab Thangal Nagar, Chiyamveli.\n\nThe home care unit was formally dedicated by Panakkad Sayed Abbasali Shihab Thangal (Chairman, PTH Kerala). The hospice office was inaugurated by Adv. Haris Beeran M.P., and the website was inaugurated by Hon. MLA A.D. Thomas. Dignitaries including Grama Panchayat President Deepti Ajaykumar, Dr. Sairu Philip, and community leaders joined in honoring this compassionate milestone.",
    "date": "2026-10-18",
    "dateDisplay": "18 October 2026",
    "category": "Event",
    "image": "assets/images/events/23.jpeg",
    "featured": true,
    "sortOrder": 5
  },
  {
    "id": "grand-launch-brochure-reception",
    "title": "PTH Mannancherry Grand Launch Brochure & Community Partnerships",
    "excerpt": "Commemorative launch brochure published highlighting PTH services, community partnerships, and medical care support.",
    "content": "The commemorative Grand Launch brochure of Pookoya Thangal Hospice Mannancherry, run by Nirvrithi Charitable Trust. The publication highlights the essential services rendered by the hospice—including home nursing care, medical equipment loans, and volunteer emotional support for chronically ill and bedridden individuals—along with generous support from community patrons including Kohinoor Group and local merchants.",
    "date": "2026-10-18",
    "dateDisplay": "18 October 2026",
    "category": "Event",
    "image": "assets/images/events/22.jpeg",
    "featured": false,
    "sortOrder": 6
  },
  {
    "id": "grand-launch-programme-invitation",
    "title": "PTH Mannancherry Grand Launch: Official Programme Schedule & Invitation",
    "excerpt": "Official programme schedule for the inauguration of Pookoya Thangal Hospice Mannancherry on 18 October 2026.",
    "content": "Official programme schedule and invitation for the Grand Inauguration of Pookoya Thangal Hospice Palliative Home Care Unit, Mannancherry, organized by Nirvrithi Charitable Trust (Reg. No: ALP-58/2026).\n\nDate: Sunday, 18 October 2026 at 6:30 PM\nVenue: Panakkad Sayed Hyderali Shihab Thangal Nagar (Spring Auditorium), Chiyamveli Junction.\n\nDignitaries include Panakkad Sayed Abbasali Shihab Thangal, Adv. Haris Beeran M.P., A.D. Thomas MLA, Deepti Ajaykumar, Dr. Sairu Philip, and other socio-political leaders.",
    "date": "2026-10-18",
    "dateDisplay": "18 October 2026",
    "category": "Announcement",
    "image": "assets/images/events/21.jpeg",
    "featured": false,
    "sortOrder": 7
  },
  {
    "id": "world-palliative-care-day-chiyamveli",
    "title": "World Palliative Care Day: വളണ്ടിയർ-ആരോഗ്യ പ്രവർത്തക സംഗമം ചിയ്യാംവെളി",
    "excerpt": "വേദനാ നിയന്ത്രണം: പാലിയേറ്റീവ് കെയറിന്റെ അനിവാര്യ ഘടകം — ഒക്ടോബർ 10 ലോക പാലിയേറ്റീവ് കെയർ ദിനാചരണം.",
    "content": "ലോക പാലിയേറ്റീവ് കെയർ ദിനത്തോടനുബന്ധിച്ച് (2026 ഒക്ടോബർ 10 ശനി വൈകുന്നേരം 3 മണിക്ക്) ചിയ്യാംവെളി മണ്ണഞ്ചേരിയിൽ പി.ടി.എച്ച് വളണ്ടിയർ-ആരോഗ്യ പ്രവർത്തക സംഗമം സംഘടിപ്പിച്ചു.\n\n'വേദനാ നിയന്ത്രണം: പാലിയേറ്റീവ് കെയറിന്റെ അനിവാര്യ ഘടകം' എന്ന പ്രമേയത്തിൽ നടന്ന സംഗമം കണ്ണൂർ മെഡിക്കൽ കോളേജ് പ്രിൻസിപ്പൽ ഡോ. സൈറു ഫിലിപ്പ് ഉദ്ഘാടനം ചെയ്തു. നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റ് ഭാരവാഹികളും പരിശീലനം പൂർത്തിയാക്കിയ വളണ്ടിയർമാരും പങ്കെടുത്തു.",
    "date": "2026-10-10",
    "dateDisplay": "10 October 2026",
    "category": "Awareness",
    "image": "assets/images/events/20.jpeg",
    "featured": false,
    "sortOrder": 8
  },
  {
    "id": "independence-day-flag-hoisting-chiyamveli",
    "title": "സ്വാതന്ത്ര്യ ദിനാഘോഷവും ദേശീയ പതാക ഉയർത്തലും: ചിയാംവെളി ജംഗ്ഷൻ",
    "excerpt": "പൂക്കോയ തങ്ങൾ ഹോസ്പിസ് മണ്ണഞ്ചേരിയുടെ നേതൃത്വത്തിൽ ചിയാംവെളി ജംഗ്ഷനിൽ ദേശീയ പതാക ഉയർത്തൽ നടന്നു.",
    "content": "2026 ഓഗസ്റ്റ് 15 സ്വാതന്ത്ര്യ ദിനത്തോടനുബന്ധിച്ച് പൂക്കോയ തങ്ങൾ ഹോസ്പിസ് (പാലിയേറ്റീവ് ഹോം കെയർ) മണ്ണഞ്ചേരി യൂണിറ്റിന്റെ ആഭിമുഖ്യത്തിൽ ചിയാംവെളി ജംഗ്ഷനിൽ രാവിലെ 8:00 മണിക്ക് ദേശീയ പതാക ഉയർത്തലും സ്വാതന്ത്ര്യ ദിനാഘോഷവും നടന്നു. നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റ് അംഗങ്ങളും പൊതുജനങ്ങളും പങ്കെടുത്തു.",
    "date": "2026-08-15",
    "dateDisplay": "15 August 2026",
    "category": "Community",
    "image": "assets/images/events/19.jpeg",
    "featured": false,
    "sortOrder": 9
  },
  {
    "id": "world-palliative-care-day-campaign-poster",
    "title": "ലോക പാലിയേറ്റീവ് കെയർ ദിനം 2026: സംഗമ പ്രഖ്യാപന പോസ്റ്റർ",
    "excerpt": "ഒക്ടോബർ 10 ലോക പാലിയേറ്റീവ് കെയർ ദിന വളണ്ടിയർ-ആരോഗ്യ പ്രവർത്തക സംഗമം ചിയ്യാംവെളിയിൽ നടത്തുന്നതിന്റെ ഔദ്യോഗിക അറിയിപ്പ്.",
    "content": "2026 ഒക്ടോബർ 10 ലോക പാലിയേറ്റീവ് കെയർ ദിനത്തോടനുബന്ധിച്ച് നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റിന് കീഴിലുള്ള പൂക്കോയ തങ്ങൾ ഹോസ്പിസ് മണ്ണഞ്ചേരി യൂണിറ്റ് സംഘടിപ്പിച്ച വളണ്ടിയർ-ആരോഗ്യ പ്രവർത്തക സംഗമത്തിന്റെ ഔദ്യോഗിക പ്രചാരണ പോസ്റ്റർ. കണ്ണൂർ ഗവ: മെഡിക്കൽ കോളേജ് പ്രിൻസിപ്പൽ ഡോ: സൈറുഫിലിപ്പ് മുഖ്യാതിഥിയായി സംഗമം ഉദ്ഘാടനം ചെയ്തു.",
    "date": "2026-10-05",
    "dateDisplay": "5 October 2026",
    "category": "Announcement",
    "image": "assets/images/events/18.jpeg",
    "featured": false,
    "sortOrder": 10
  },
  {
    "id": "lifeliner-training-camp-poster",
    "title": "Lifeliner Training: അടിയന്തിര ജീവൻ രക്ഷാപ്രവർത്തന പരിശീലന ക്യാമ്പ്",
    "excerpt": "കോഴിക്കോട് ബേബി മെമ്മോറിയൽ ഹോസ്പിറ്റൽ എമർജൻസി വിഭാഗത്തിന്റെ നേതൃത്വത്തിൽ ചിയാംവേളി SNDP ഹാളിൽ പരിശീലനം.",
    "content": "കോഴിക്കോട് ബേബി മെമ്മോറിയൽ ഹോസ്പിറ്റൽ എമർജൻസി വിഭാഗത്തിന്റെ നേതൃത്വത്തിൽ അടിയന്തിര ജീവൻ രക്ഷാപ്രവർത്തന പരിശീലന ക്യാമ്പ് (Lifeliner Training) 2026 ആഗസ്റ്റ് 24 തിങ്കളാഴ്ച രാവിലെ 10 മണിക്ക് ചിയാംവേളി SNDP ഹാളിൽ നടന്നു.\n\nക്യാമ്പ് മണ്ണഞ്ചേരി പോലീസ് സ്റ്റേഷൻ ബഹു. ഇൻസ്പെക്ടർ ശ്രീ എൻ.സി. ജോസ് ഉദ്ഘാടനം ചെയ്തു. നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റും പൂക്കോയ തങ്ങൾ ഹോസ്പിസും ചേർന്നാണ് പരിശീലനം സംഘടിപ്പിച്ചത്.",
    "date": "2026-08-24",
    "dateDisplay": "24 August 2026",
    "category": "Awareness",
    "image": "assets/images/events/17.jpeg",
    "featured": false,
    "sortOrder": 11
  },
  {
    "id": "emergency-lifeliner-training-camp-chandrika",
    "title": "ജീവൻരക്ഷാ പരിശീലന ക്യാമ്പ്: ചന്ദ്രിക പത്രവാർത്ത",
    "excerpt": "മണ്ണഞ്ചേരി പൊലീസ് ഹൗസ് ഓഫീസർ എൻ.സി. ജോസ് അടിയന്തര ജീവൻ രക്ഷാ പരിശീലന ക്യാമ്പ് ഉദ്ഘാടനം ചെയ്തു.",
    "content": "നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റ്, പൂക്കോയ തങ്ങൾ ഹോസ്പിസ്, കോഴിക്കോട് ബേബി മെമ്മോറിയൽ ആശുപത്രി എന്നിവയുടെ സംയുക്ത ആഭിമുഖ്യത്തിൽ അടിയന്തര ജീവൻ രക്ഷാ പരിശീലന ക്യാമ്പ് സംഘടിപ്പിച്ചു.\n\nമണ്ണഞ്ചേരി പൊലീസ് ഹൗസ് ഓഫീസർ എൻ.സി. ജോസ് ക്യാമ്പ് ഉദ്ഘാടനം ചെയ്തു. അപകടത്തിൽപ്പെടുന്നവർക്ക് കൃത്യസമയത്ത് ലഭിക്കുന്ന ലളിതമായ പ്രഥമശുശ്രൂഷകൾ പോലും വിലപ്പെട്ട നിരവധി ജീവനുകൾ രക്ഷിക്കാൻ സഹായിക്കുമെന്ന് അദ്ദേഹം പറഞ്ഞു. നിർവൃതി ചാരിറ്റബിൾ ട്രസ്റ്റ് പ്രസിഡന്റ് എസ്. മുഹമ്മദ് ബഷീർ അധ്യക്ഷത വഹിച്ചു. എ.ടി. മുഹമ്മദ് മാസ്റ്ററും മുഹമ്മദ് ഷബീർ അലിയും പരിശീലന ക്ലാസിന് നേതൃത്വം നൽകി.",
    "date": "2026-08-25",
    "dateDisplay": "25 August 2026",
    "category": "News",
    "image": "assets/images/events/16.jpeg",
    "featured": false,
    "sortOrder": 12
  },
  {
    "id": "ramadan-dates-challenge-chandrika-coverage",
    "title": "ഈത്തപ്പഴ ചലഞ്ചുമായി പൂക്കോയ തങ്ങൾ ഹോസ്പിസ്: ചന്ദ്രിക വാർത്ത",
    "excerpt": "പാലിയേറ്റീവ് പ്രവർത്തനങ്ങളുടെ ധനശേഖരണാർത്ഥം സംഘടിപ്പിച്ച ഈത്തപ്പഴ ചലഞ്ച് ഡോ. അമീർ അബ്ദുല്ല ഉദ്ഘാടനം ചെയ്തു.",
    "content": "മുസ്ലിം ലീഗ് ചിയാംവെളി മേഖല കമ്മിറ്റിയുടെ ആഭിമുഖ്യത്തിൽ ആരംഭിക്കുന്ന പൂക്കോയ തങ്ങൾ ഹോസ്പിസ് പാലിയേറ്റീവ് പ്രവർത്തനങ്ങളുടെ ധനശേഖരണാർത്ഥം സംഘടിപ്പിച്ച ഈത്തപ്പഴ ചലഞ്ച് പി.ടി.എച്ച് സംസ്ഥാന കോ-ഓർഡിനേറ്റർ ഡോ: അമീർ അബ്ദുള്ള ഉദ്ഘാടനം ചെയ്തതിനെക്കുറിച്ച് ചന്ദ്രിക ദിനപത്രം (2026 ഫെബ്രുവരി 12, കൊച്ചി എഡിഷൻ, പേജ് 15) റിപ്പോർട്ട് ചെയ്തു.\n\nസംഘാടക സമിതി ചെയർമാൻ എസ്. മുഹമ്മദ് ബഷീർ അധ്യക്ഷത വഹിച്ചു. മുസ്ലിം ലീഗ് മണ്ഡലം പ്രസിഡന്റ് ഹാമിദ് കുഞ്ഞാശാൻ, പഞ്ചായത്ത് പ്രസിഡന്റ് വാഴയിൽ അബ്ദുള്ള, ഗ്രാമ പഞ്ചായത്ത് മെമ്പർ ബി. നിസാർ എന്നിവർ പങ്കെടുത്തു.",
    "date": "2026-02-12",
    "dateDisplay": "12 February 2026",
    "category": "News",
    "image": "assets/images/events/15.jpeg",
    "featured": false,
    "sortOrder": 13
  },
  {
    "id": "ramadan-dates-challenge-appeal",
    "title": "റമദാൻ ഈത്തപ്പഴ ചലഞ്ച്: പാലിയേറ്റീവ് പരിചരണ ധനശേഖരണ ക്യാമ്പയിൻ",
    "excerpt": "നിത്യരോഗികൾ.... നീറുന്നജീവിതങ്ങൾ.... നമ്മൾ കൂടെ വേണം — ചിയാംവെളി മേഖല ഈത്തപ്പഴ ചലഞ്ച്.",
    "content": "നിത്യരോഗികൾ.... നീറുന്നജീവിതങ്ങൾ.... നമ്മൾ കൂടെ വേണം!\n\nപൂക്കോയ തങ്ങൾ ഹോസ്പിസ് മണ്ണഞ്ചേരി ചിയാംവെളി മേഖലയുടെ നേതൃത്വത്തിൽ പാലിയേറ്റീവ് രോഗികൾക്കായി റമദാൻ കരീം ഈത്തപ്പഴ ചലഞ്ച് സംഘടിപ്പിച്ചു (₹200 - 500 ഗ്രാം). കിടപ്പിലായ രോഗികൾക്ക് മരുന്നും പരിചരണ ഉപകരണങ്ങളും എത്തിക്കുന്നതിനായി സഹായഹസ്തം നീട്ടാൻ അഭ്യർത്ഥിക്കുന്നു.",
    "date": "2026-02-10",
    "dateDisplay": "February 2026",
    "category": "Announcement",
    "image": "assets/images/events/14.png",
    "featured": false,
    "sortOrder": 14
  },
  {
    "id": "chandrika-training-camp-coverage",
    "title": "Chandrika Media Coverage: 3-Day Volunteer Training Camp Valedictory",
    "excerpt": "Newspaper Chandrika featured the completion of Nirvrithi Trust's volunteer training camp with addresses by Dr. Ameer Ali and K.A. Hamid Kunjashan.",
    "content": "The leading daily Chandrika (18 April 2026, Kochi Edition, Page 15) published extensive coverage of the 3-day palliative care volunteer camp held at Crescent Public School, Mannancherry. The camp was inaugurated by Muslim League Alappuzha Constituency President K.A. Hamid Kunjashan and presided over by Trust President S. Muhammad Basheer. Expert sessions were led by trainers Jose Pulimuttil, A.T. Muhammad, and Basil Badusha. PTH State Coordinator Dr. Ameer Ali inaugurated the valedictory session and distributed course completion certificates to 25 newly trained volunteers.",
    "date": "2026-04-18",
    "dateDisplay": "18 April 2026",
    "category": "News",
    "image": "assets/images/events/13.jpeg",
    "featured": false,
    "sortOrder": 15
  },
  {
    "id": "batch-113-volunteer-graduation",
    "title": "24 Volunteers Certified in Batch 113: Total Trained Reaches 5,544 Milestone",
    "excerpt": "Batch 113 valedictory ceremony saw 24 new palliative volunteers certified at Crescent Public School, joining over 5,500 trained volunteers statewide.",
    "content": "Pookoya Thangal Hospice Mannancherry celebrated the graduation of Batch 113 palliative care volunteers on 16 April 2026. A group of 24 dedicated men and women successfully completed the rigorous 3-day curriculum covering nursing support, bed sore prevention, and psychosocial care at Crescent Public School. This milestone brings the total number of trained PTH volunteers across Kerala to 5,544, creating an expansive network of compassionate frontline caregivers.",
    "date": "2026-04-16",
    "dateDisplay": "16 April 2026",
    "category": "Community",
    "image": "assets/images/events/12.jpeg",
    "featured": false,
    "sortOrder": 16
  },
  {
    "id": "palliative-awareness-class-chiyamveli",
    "title": "Palliative Care Awareness Class Conducted in Chiyamveli",
    "excerpt": "PTH Kerala Coordinator Dr. M.A. Ameerali and Azeez Badayil led an educational seminar on palliative care principles at Chiyamveli.",
    "content": "An educational palliative care awareness class was organized at Chiyamveli on Tuesday, 10 February 2026 at 2:30 PM. The session was conducted by Dr. M.A. Ameerali (CFO & Coordinator, Pookoya Thangal Hospice Kerala) and Azeez Badayil (Member, PTH Kerala). Attendees, including local volunteers and family caregivers, learned the core tenets of pain management, emotional support, and community hospice volunteering.",
    "date": "2026-02-10",
    "dateDisplay": "10 February 2026",
    "category": "Awareness",
    "image": "assets/images/events/11.jpeg",
    "featured": false,
    "sortOrder": 17
  },
  {
    "id": "oxygen-concentrator-donation",
    "title": "Oxygen Concentrator & BP Monitor Donated by Puthenparambu Family",
    "excerpt": "Puthenparambu family gathering and well-wishers donated a K-Life OC-102 Oxygen Concentrator and digital BP monitor to PTH Mannancherry.",
    "content": "Strengthening the medical apparatus pool at Pookoya Thangal Hospice, the Puthenparambu Family Gathering generously donated a modern K-Life OC-102 Oxygen Concentrator, and another compassionate well-wisher donated a digital blood pressure monitor. The equipment was received by Trust President S. Muhammad Basheer and office bearers. The oxygen concentrator is now available for free loan deployment to respiratory palliative patients in the region.",
    "date": "2026-08-10",
    "dateDisplay": "10 August 2026",
    "category": "News",
    "image": "assets/images/events/10.jpeg",
    "featured": false,
    "sortOrder": 18
  },
  {
    "id": "monthly-subscription-scheme",
    "title": "Monthly Contribution Scheme (മാസവരി) Inaugurated to Support Care",
    "excerpt": "Trust member Sathyan presented the inaugural monthly contribution to President S. Muhammad Basheer, launching sustainable funding.",
    "content": "To create sustainable financial support for recurring patient medical supplies, dressings, and medicines, Nirvrithi Charitable Trust launched its Monthly Subscription Scheme (മാസവരി). In a gathering at the Chiyamveli office, Trust Member Sathyan handed over the inaugural subscription contribution to Trust President S. Muhammad Basheer. The initiative allows community members to make modest monthly contributions to maintain uninterrupted care for bedridden patients.",
    "date": "2026-07-15",
    "dateDisplay": "15 July 2026",
    "category": "Community",
    "image": "assets/images/events/9.jpeg",
    "featured": false,
    "sortOrder": 19
  },
  {
    "id": "dedicated-palliative-care-van",
    "title": "Dedicated Palliative Care Van Commissioned for Mannancherry Unit",
    "excerpt": "Nirvrithi Charitable Trust commissioned a dedicated Maruti Eeco van for home palliative care delivery across Mannancherry.",
    "content": "Pookoya Thangal Hospice Mannancherry Unit celebrated the induction of its dedicated Palliative Care Van into active service. Fitted with essential mobile care equipment, medical supplies, and emergency aids, the van enables certified home care nurses and trained volunteers to reach bedridden patients promptly and reliably. Nirvrithi Charitable Trust expressed heartfelt gratitude to all sponsors and supporters who made this mobile unit possible.",
    "date": "2026-07-28",
    "dateDisplay": "28 July 2026",
    "category": "News",
    "image": "assets/images/events/8.jpeg",
    "featured": false,
    "sortOrder": 20
  },
  {
    "id": "vehicle-key-handover-knr-kohinoor",
    "title": "PTH Mobile Care Vehicle Handover Ceremony Sponsored by KNR Kohinoor",
    "excerpt": "Official key handover ceremony of the PTH Mobile Care vehicle held at the Chiyamveli office with KNR Kohinoor sponsorship.",
    "content": "On Tuesday, 28 July 2026 at 7:00 PM, the formal key handover ceremony of the PTH Mobile Care vehicle took place at the Pookoya Thangal Hospice Office in Chiyamveli. The vehicle, sponsored through the generous support of KNR Kohinoor, represents a major leap forward in the hospice's capacity to conduct regular doctor and nurse home visits across Mannancherry and adjacent panchayaths under the motto 'Care & Compassion For Life's Journey'.",
    "date": "2026-07-28",
    "dateDisplay": "28 July 2026",
    "category": "Event",
    "image": "assets/images/events/7.jpeg",
    "featured": false,
    "sortOrder": 21
  },
  {
    "id": "chiyamveli-unit-expansion-notice",
    "title": "Chiyamveli Palliative Care Unit Expansion & Equipment Notice",
    "excerpt": "Official circular announcing full-fledged operational rollout in Chiyamveli with certified volunteers, permanent nurse, and equipment roster.",
    "content": "An official communique signed by Trust President S. Muhammad Basheer, General Secretary Nahas Thoppil, and Treasurer Hamsa Ashan detailed the expansion of Pookoya Thangal Hospice (Reg. No: ALP58/2026) services centered at Chiyamveli. With 25 trained volunteers completing certified coursework, arrangements were finalized for a dedicated palliative care nurse and vehicle. A free equipment inventory—comprising BP apparatus, blood glucose monitors, oxygen support systems, nebulizers, wheelchairs, walkers, and hospital cots—was made operational for patient home care.",
    "date": "2026-06-07",
    "dateDisplay": "7 June 2026",
    "category": "Announcement",
    "image": "assets/images/events/6.jpeg",
    "featured": false,
    "sortOrder": 22
  },
  {
    "id": "batch-113-training-announcement",
    "title": "Batch 113: Three-Day Palliative Volunteer Training Camp at Crescent Public School",
    "excerpt": "A 3-day intensive volunteer training camp following WHO palliative care guidelines was conducted at Crescent Public School, Mannancherry.",
    "content": "Pookoya Thangal Hospice and Nirvrithi Charitable Trust, in association with the IUML Chiyamveli Mekhala Committee, organized Batch 113 of the 3-day Palliative Care Volunteer Training Camp from 13 to 15 April 2026 (10 AM to 4 PM) at Crescent Public School, Mannancherry. The training followed World Health Organization (WHO) palliative guidelines, empowering local citizens and youth with essential caregiving skills, empathetic listening techniques, and home healthcare protocols.",
    "date": "2026-04-13",
    "dateDisplay": "13–15 April 2026",
    "category": "Awareness",
    "image": "assets/images/events/5.jpeg",
    "featured": false,
    "sortOrder": 23
  },
  {
    "id": "mannancherry-pth-day-bali-perunnal",
    "title": "Mannancherry PTH Day — Equipment Donation & Support Appeal",
    "excerpt": "Nirvrithi Charitable Trust announced the Mannancherry PTH Day campaign on Bali Perunnal to mobilize resources for bedridden patient equipment.",
    "content": "In connection with Eid-ul-Adha (Bali Perunnal), Nirvrithi Charitable Trust and Pookoya Thangal Hospice launched the 'Mannancherry PTH Day' campaign. The initiative urged compassionate individuals and families to contribute towards the purchase of critical palliative care equipment for bedridden patients, including hospital beds, wheelchairs, and air mattresses. The public was provided with official banking channels (Kerala Grameen Bank, Kalavoor Branch, A/c: 40698101104561, IFSC: KLGB0040698) and UPI payment facilities.",
    "date": "2026-05-28",
    "dateDisplay": "28 May 2026",
    "category": "Announcement",
    "image": "assets/images/events/4.jpeg",
    "featured": false,
    "sortOrder": 24
  },
  {
    "id": "independence-day-flag-2026",
    "title": "80th Independence Day Flag Hoisting & Celebrations at PTH Mannancherry",
    "excerpt": "Nirvrithi Charitable Trust marked the 80th Independence Day with national flag hoisting led by President S. Muhammad Basheer.",
    "content": "Pookoya Thangal Hospice, Mannancherry, organized a solemn 80th Independence Day celebration. Nirvrithi Charitable Trust President S. Muhammad Basheer hoisted the national tricolour in the presence of office bearers, community leaders, and local residents. Speakers reiterated the trust's founding principle that palliative service to suffering fellow human beings is an essential form of national duty. The commemoration was held alongside the hospice's anniversary milestones since its establishment on 15 August 2020.",
    "date": "2026-08-15",
    "dateDisplay": "15 August 2026",
    "category": "Event",
    "image": "assets/images/events/3.jpeg",
    "featured": false,
    "sortOrder": 25
  },
  {
    "id": "vehicle-donation-chandrika-2026",
    "title": "Elangikkaththara Family Donates Vehicle for Mobile Palliative Care",
    "excerpt": "The Elangikkaththara family of Mannancherry gifted a dedicated four-wheeler to Pookoya Thangal Hospice to support mobile home-care visits.",
    "content": "In an inspiring gesture of community solidarity reported in Chandrika daily (04 August 2026, Kochi Edition, Page 14), the Elangikkaththara family of Mannancherry donated a vehicle to Pookoya Thangal Hospice. Family representatives Hamid Kunjashan and Naufal Kohinoor handed over the vehicle keys to Nirvrithi Trust President S. Muhammad Basheer in a ceremony held at the hospice. The dedicated vehicle enables medical teams, nurses, and volunteers to provide prompt, dignified care to bedridden patients directly at home. Dignitaries present included K.A. Hamid Kunjashan, Ibrahim Kutty, B. Mansoor, E.A. Ziyad, T.H. Nasser, Sabu Kalavoor, and N.A. Muhammad Ismail.",
    "date": "2026-08-04",
    "dateDisplay": "4 August 2026",
    "category": "News",
    "image": "assets/images/events/2.jpeg",
    "featured": false,
    "sortOrder": 26
  },
  {
    "id": "equipment-handover-august-2026",
    "title": "Palliative Care Medical Equipment Handover on Independence Day",
    "excerpt": "Nirvrithi Charitable Trust received vital palliative care equipment including wheelchairs and air mattresses from community donors at PTH Mannancherry.",
    "content": "On India's 80th Independence Day, a major consignment of palliative care medical equipment—including Y-Care dual-brake wheelchairs, specialized anti-bedsore air mattresses, and patient monitoring accessories—was officially received at Pookoya Thangal Hospice, Mannancherry. Nirvrithi Charitable Trust President S. Muhammad Basheer, office bearers, and active volunteers formally received the donated equipment. The tools are immediately available for free home loans to bedridden patients across Mannancherry and neighbouring panchayaths.",
    "date": "2026-08-15",
    "dateDisplay": "15 August 2026",
    "category": "News",
    "image": "assets/images/events/1.jpeg",
    "featured": false,
    "sortOrder": 27
  }
];

/* Derived helpers */
const NEWS_CATEGORIES = ['All', ...new Set(NEWS_DATA.map(n => n.category))];
