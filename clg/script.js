// Modal Controller & Gallery Navigation for Majuli College Portal
function openCertModal(serial) {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.add('active');
        if (serial) {
            const input = document.getElementById('certSearchInput');
            if (input) input.value = serial;
        }
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) modal.classList.remove('active');
}

function openBrochureModal() {
    const modal = document.getElementById('brochureModal');
    if (modal) modal.classList.add('active');
}

function closeBrochureModal() {
    const modal = document.getElementById('brochureModal');
    if (modal) modal.classList.remove('active');
}

// About Document Modal Controller & Content Dictionary
const aboutDocContents = {
    'about-us': {
        title: 'About Majuli College (মাজুলী মহাবিদ্যালয়)',
        subtitle: 'Pioneer Higher Education Institution in River Island Majuli · Estd. 1962',
        body: `<p><strong>Majuli College</strong> is the premier, pioneer seat of higher education situated on the world-famous river island of Majuli in Assam. Born out of the collective aspirations and sacrifice of the local educationists, satradhikars, and citizens of the river island, the college began its journey on <strong>17th September 1962</strong>.</p>
        <p>Affiliated to Dibrugarh University, accredited Grade 'B++' by NAAC, and recognized under UGC 2(f) and 12(B), the college offers undergraduate programmes in Arts, Science, B.Voc. in Information Technology, and the flagship 4-Year Integrated Teacher Education Programme (ITEP B.A. B.Ed).</p>`
    },
    'mission-vision': {
        title: 'Mission & Vission (লক্ষ্য আৰু উদ্দেশ্য)',
        subtitle: 'Core Values, Educational Philosophy & Vision for Island Youth',
        body: `<div style="background: #f0f9ff; border-left: 4px solid #0082cb; padding: 14px; margin-bottom: 14px; border-radius: 4px;">
            <h4 style="color: #0082cb; margin-bottom: 6px;">VISION (দৰ্শন)</h4>
            <p>To be a premier seat of higher learning that integrates the rich spiritual, cultural, and ecological heritage of the river island of Majuli with modern multidisciplinary education, fostering holistic intellectual growth, ethical values, and inclusive development.</p>
        </div>
        <div style="background: #fefce8; border-left: 4px solid #f59e0b; padding: 14px; border-radius: 4px;">
            <h4 style="color: #b45309; margin-bottom: 6px;">MISSION (লক্ষ্য)</h4>
            <ul style="padding-left: 18px; margin-top: 6px; line-height: 1.6;">
                <li>Provide accessible, affordable, and transformative higher education to learners from rural and island backgrounds.</li>
                <li>Implement NEP-2020 through flexible multidisciplinary curricula, skill training, and 4-Year ITEP.</li>
                <li>Preserve and document the unique Vaishnavite cultural traditions, manuscripts, and riverine ecosystem of Majuli.</li>
                <li>Nurture leadership, scientific temper, gender equality, and sustainable environmental stewardship.</li>
            </ul>
        </div>`
    },
    'emblem': {
        title: 'College Emblem (প্ৰতীক চিহ্ন)',
        subtitle: 'Symbolic Interpretation of the Majuli College Insignia',
        body: `<p><strong>1. The Open Book:</strong> Signifies boundless acquisition of knowledge, scholarship, and enlightenment for all humanity.</p>
        <p><strong>2. The Earthen Lamp (Pradeep):</strong> Radiates the eternal flame of wisdom, dispelling the darkness of ignorance and prejudice.</p>
        <p><strong>3. River Waves:</strong> Represents the mighty Brahmaputra river encircling Majuli, symbolising continuous flow, vitality, and resilience.</p>
        <p><strong>4. Outer Inscription:</strong> Inscribed with 'MAJULI COLLEGE' and 'ESTD. 1962', binding our rich institutional heritage with forward progress.</p>`
    },
    'organogram': {
        title: 'College Organogram (প্ৰশাসনিক গাঁথনি)',
        subtitle: 'Institutional Governance & Administrative Hierarchy',
        body: `<p><strong>1. Apex Level:</strong> Governing Body (GB) headed by President &amp; Nominated Stakeholders.</p>
        <p><strong>2. Executive Level:</strong> Principal &amp; Secretary (Dr. Debajit Saikia) leading overall administration.</p>
        <p><strong>3. Academic &amp; Quality:</strong> Vice Principal (Academic routine) &amp; IQAC Coordinator (Quality assurance).</p>
        <p><strong>4. Departments:</strong> 16 Academic HoDs, ITEP Faculty, Central Library, and Administrative Office Staff.</p>`
    },
    'anthem': {
        title: 'Majuli College Anthem (মাজুলী মহাবিদ্যালয় সংগীত)',
        subtitle: 'Official Institutional Anthem Celebrating River Island Heritage',
        body: `<div style="text-align: center; font-style: italic; background: #fffbeb; padding: 18px; border-radius: 8px; border: 1px solid #fde68a; line-height: 2;">
            লুইতৰ বুকুত উজলি উঠা জ্ঞানৰ প্ৰদীপ শিখা,<br>
            মাজুলীৰ আকাশত বিলাইছে আলোকৰ সুবাস ৰেখা।<br>
            কমলাবাৰীৰ পবিত্ৰ ভূমিত জ্বলে অমিয়া জ্ঞান,<br>
            মাজুলী মহাবিদ্যালয় আমাৰ চিৰ চেনেহৰ তীৰ্থস্থান।<br><br>
            গুৰুজনাৰ আধ্যাত্মিক সুৰভিত বিকশিত আমাৰ প্ৰাণ,<br>
            বিজ্ঞান, সাহিত্য, কলাৰ সাধনাত গাই যাওঁ জয়গান।<br>
            দেশৰ সেৱাত, মানৱ সেৱাত আগবাঢ়ি যাওঁ আমি,<br>
            মাজুলী মহাবিদ্যালয় আমাৰ শিৰৰ মুকুটমণি।
        </div>`
    },
    'location': {
        title: 'Campus Location (ভৌগোলিক অৱস্থিতি)',
        subtitle: 'Kamalabari, Majuli, Assam - 785106 · River Ferry Transit',
        body: `<p><strong>Address:</strong> Majuli College, P.O. Kamalabari, Dist. Majuli, Assam - 785106, India</p>
        <p><strong>Coordinates:</strong> Latitude 26.96033° N, Longitude 94.171068° E</p>
        <p><strong>Transit:</strong> From Jorhat via Nimati Ghat government ferry to Kamalabari Ghat (45 min), then 3 km road to campus.</p>`
    },
    'principals': {
        title: 'List of Principals (অধ্যক্ষসকলৰ তালিকা)',
        subtitle: 'Chronological Succession of Principals since 1962',
        body: `<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.82rem;">
            <tr style="background: #0082cb; color: #fff;"><th style="padding: 6px 10px;">Name</th><th style="padding: 6px 10px;">Tenure</th></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Late Atul Chandra Goswami</td><td style="padding: 6px 10px;">1962 – 1965 (Founding)</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Late Purna Chandra Borah</td><td style="padding: 6px 10px;">1965 – 1978</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Dr. Jogendra Nath Borah</td><td style="padding: 6px 10px;">1978 – 1991</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Sri Hemanta Kumar Borah</td><td style="padding: 6px 10px;">1991 – 2002</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Dr. B. C. Borah</td><td style="padding: 6px 10px;">2002 – 2011</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 6px 10px;">Dr. D. P. Borah</td><td style="padding: 6px 10px;">2011 – 2018</td></tr>
            <tr style="background: #f0f9ff; font-weight: bold;"><td style="padding: 6px 10px; color: #0082cb;">Dr. Debajit Saikia</td><td style="padding: 6px 10px;">2018 – Present (Incumbent)</td></tr>
        </table>`
    },
    'code-of-conduct': {
        title: 'Code of Conduct (আচৰণ বিধি)',
        subtitle: 'Rules of Discipline for Students, Teachers & Staff',
        body: `<p><strong>Students:</strong> Mandatory 75% class attendance, formal college uniform, photo ID badge, zero ragging tolerance.</p>
        <p><strong>Faculty:</strong> Adherence to UGC Professional Ethics, mentor-mentee framework, unbiased evaluation, continuous research publication.</p>`
    },
    'undertakings': {
        title: 'Undertakings & Self-Declarations',
        subtitle: 'NAAC & UGC Regulatory Statutory Disclosures',
        body: `<p>Mandatory self-declaration submitted to NAAC Bengaluru verifying that all uploaded data, AISHE code (C-8561), and student enrollment statistics are authenticated.</p>
        <p>Statutory RTI Section 4(1)(b) public disclosures under Right to Information Act 2005.</p>`
    },
    'policy-documents': {
        title: 'Policy Doucments (নীতি নিৰ্দেশনা পত্ৰ)',
        subtitle: 'Statutory Operational Policies Approved by Governing Body',
        body: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 15px;">
            <button onclick="openAboutDocModal('policy-1')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 1:</strong> IT &amp; ICT Infrastructure</button>
            <button onclick="openAboutDocModal('policy-2')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 2:</strong> Research &amp; Ethics</button>
            <button onclick="openAboutDocModal('policy-3')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 3:</strong> Green Campus &amp; Solar</button>
            <button onclick="openAboutDocModal('policy-4')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 4:</strong> Gender Sensitization (ICC)</button>
            <button onclick="openAboutDocModal('policy-5')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>policy 5:</strong> Divyangjan Friendly</button>
            <button onclick="openAboutDocModal('policy-6')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 6:</strong> Code of Ethics</button>
            <button onclick="openAboutDocModal('policy-7')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 7:</strong> Waste Management</button>
            <button onclick="openAboutDocModal('policy-8')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 8:</strong> Student Welfare &amp; Fee Waiver</button>
            <button onclick="openAboutDocModal('policy-9')" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; text-align: left; background: #ffffff; cursor: pointer;"><strong>Policy 9:</strong> Facilities Maintenance</button>
        </div>`
    },
    'policy-1': {
        title: 'Policy 1: IT & ICT Infrastructure Policy',
        subtitle: 'Code: MC/POL/2022/01 · Governing Body Res. No. 04',
        body: `<p><strong>Scope & Objective:</strong> Governs campus-wide Wi-Fi infrastructure, digital classrooms, computer laboratory access, cyber security, data backup, and automated library software (SOUL 2.0).</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>High-speed fiber connectivity provided to all 16 academic departments.</li>
            <li>Role-based access control and cyber protection compliance.</li>
            <li>Regular preventive maintenance of smart boards and computer lab systems.</li>
        </ul>`
    },
    'policy-2': {
        title: 'Policy 2: Research Promotion & Ethics Policy',
        subtitle: 'Code: MC/POL/2022/02 · Research, Consultancy & Extension Cell',
        body: `<p><strong>Scope & Objective:</strong> Institutional seed money grant allocations, plagiarism screening (&lt;10% similarity index), and faculty incentives for publications in UGC-CARE/Scopus indexed journals.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Fostering interdisciplinary riverine and Brahmaputra ecological research.</li>
            <li>Mandatory screening through approved anti-plagiarism tools.</li>
            <li>Seed funding support for student and faculty research initiatives.</li>
        </ul>`
    },
    'policy-3': {
        title: 'Policy 3: Green Campus, Environment & Energy Policy',
        subtitle: 'Code: MC/POL/2022/03 · Eco-Club & Green Taskforce',
        body: `<p><strong>Scope & Objective:</strong> Establishes Majuli College as a carbon-neutral institution preserving riverine wetland ecology.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Complete prohibition of single-use plastics across campus premises.</li>
            <li>45 kW rooftop solar photovoltaic grid power generation.</li>
            <li>Rainwater harvesting systems and botanical herbal garden preservation.</li>
        </ul>`
    },
    'policy-4': {
        title: 'Policy 4: Gender Sensitization & ICC Policy',
        subtitle: 'Code: MC/POL/2022/04 · Internal Complaints Committee (ICC)',
        body: `<p><strong>Scope & Objective:</strong> Compliance with POSH Act 2013 and UGC Regulations ensuring a safe, equitable academic and working atmosphere.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Zero tolerance against any gender-based harassment or violence.</li>
            <li>Statutory Internal Complaints Committee with external NGO legal counsel.</li>
            <li>Regular gender sensitization programs, counselling, and self-defense training.</li>
        </ul>`
    },
    'policy-5': {
        title: 'policy 5: Divyangjan Friendly Campus Policy',
        subtitle: 'Code: MC/POL/2023/05 · Equal Opportunity Cell',
        body: `<p><strong>Scope & Objective:</strong> Universal accessibility for differently-abled scholars and staff across all college premises.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Ramp access with safety handrails for academic blocks, library, and auditorium.</li>
            <li>Accessible ground-floor restrooms with tactile indicators.</li>
            <li>Assistive screen reader software and audio-learning material in Central Library.</li>
        </ul>`
    },
    'policy-6': {
        title: 'Policy 6: Code of Ethics & Academic Integrity Policy',
        subtitle: 'Code: MC/POL/2023/06 · Academic Council',
        body: `<p><strong>Scope & Objective:</strong> Governing academic honesty, ethical teaching standards, continuous internal evaluation, and disciplinary measures against plagiarism.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Transparent internal assessment with student verification access.</li>
            <li>Compliance with UGC Teacher Professional Code of Conduct.</li>
            <li>Repudiation of commercial private tuition by college faculty.</li>
        </ul>`
    },
    'policy-7': {
        title: 'Policy 7: Waste Management & Water Harvesting Policy',
        subtitle: 'Code: MC/POL/2023/07 · Sanitation & Health Committee',
        body: `<p><strong>Scope & Objective:</strong> Systematic segregation, recycling, and disposal of solid, liquid, sanitary, and electronic waste.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Color-coded source segregation (Green, Blue, Red bins).</li>
            <li>Compost units converting dry foliage and organic food waste to bio-fertilizer.</li>
            <li>Certified e-waste recycling through state-approved agency channels.</li>
        </ul>`
    },
    'policy-8': {
        title: 'Policy 8: Student Welfare & Fee Waiver Policy',
        subtitle: 'Code: MC/POL/2023/08 · Student Welfare Cell',
        body: `<p><strong>Scope & Objective:</strong> Comprehensive financial assistance ensuring education accessibility for economically underprivileged students.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Full implementation of Assam Govt. Fee Waiver Scheme.</li>
            <li>Discretionary grants from College Poor Fund for flood-affected families.</li>
            <li>Free Central Library Book Bank facility for all four academic years.</li>
        </ul>`
    },
    'policy-9': {
        title: 'Policy 9: Facilities Maintenance & Utilization Policy',
        subtitle: 'Code: MC/POL/2023/09 · Planning & Building Maintenance Committee',
        body: `<p><strong>Scope & Objective:</strong> Standard Operating Procedures for preventive maintenance and optimal sharing of institutional laboratories, classrooms, and grounds.</p>
        <ul style="padding-left: 18px; line-height: 1.7; margin-top: 8px;">
            <li>Annual maintenance contracts for precision laboratory analytical equipment.</li>
            <li>Asset tagging and annual stock verification by audit committees.</li>
            <li>Structured guidelines for community sports and cultural auditorium usage.</li>
        </ul>`
    },
    'distinctiveness': {
        title: 'Institutional Distinctiveness',
        subtitle: 'Citadel of Higher Learning in the World’s Largest River Island',
        body: `<p>1. <strong>Cultural Citadel:</strong> Active preservation of Vaishnavite Satriya dance, Ankia Bhaona theatre, mask art, and Sanchi-pat manuscripts.</p>
        <p>2. <strong>Riverine Ecology:</strong> Research in Brahmaputra hydrology, wetland conservation, and local flood disaster management.</p>
        <p>3. <strong>NEP-2020 Teacher Education:</strong> Leading Assam with the 4-Year ITEP B.A. B.Ed programme.</p>`
    },
    'perspective-plan': {
        title: 'Perspective Plan (2022–2032)',
        subtitle: '10-Year Strategic Academic and Physical Roadmap',
        body: `<p><strong>Goal 1:</strong> Full implementation of NEP-2020 FYUGP & starting Master's Degree (P.G.) regular programmes.</p>
        <p><strong>Goal 2:</strong> Establishing the Center for River Island Studies and Brahmaputra Ecological Research.</p>
        <p><strong>Goal 3:</strong> 100% solar self-sufficiency & green carbon-neutral campus.</p>`
    },
    'green-audit': {
        title: 'Green Audit Report (2025–26)',
        subtitle: 'Environmental, Energy & Carbon Footprint Assessment',
        body: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; margin: 12px 0;">
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 6px;"><strong style="color: #16a34a; font-size: 1.1rem;">45 kW</strong><br><small>Solar Power</small></div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 6px;"><strong style="color: #16a34a; font-size: 1.1rem;">140+</strong><br><small>Herbal Flora</small></div>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 6px;"><strong style="color: #16a34a; font-size: 1.1rem;">Grade A</strong><br><small>Eco-Audit</small></div>
        </div>
        <p>Certified green campus compliance covering renewable solar energy, rainwater harvesting, and waste management.</p>`
    },
    'iso-certificate': {
        title: 'ISO 9001:2015 Certificate',
        subtitle: 'Quality Management System Certification in Higher Education',
        body: `<div style="text-align: center; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
            <h4 style="color: #0f1f3d; font-size: 1.1rem; margin-bottom: 4px;">ISO 9001:2015 Certified Institution</h4>
            <p style="color: #64748b; font-size: 0.85rem;">Certificate No: QMS-MC-2025/785106 · Valid: 2024–2027</p>
            <p style="color: #047857; font-weight: bold; margin-top: 6px;">Status: Valid & Active · Verified</p>
        </div>`
    }
};

function openAboutDocModal(docId) {
    const modal = document.getElementById('aboutDocModal');
    const content = aboutDocContents[docId] || aboutDocContents['about-us'];
    if (modal) {
        document.getElementById('aboutDocTitle').innerText = content.title;
        document.getElementById('aboutDocSubtitle').innerText = content.subtitle;
        document.getElementById('aboutDocBody').innerHTML = content.body;
        modal.classList.add('active');
    }
}

function closeAboutDocModal() {
    const modal = document.getElementById('aboutDocModal');
    if (modal) modal.classList.remove('active');
}

function togglePolicyDropdown(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const submenu = document.getElementById('policySubmenu');
    if (submenu) {
        submenu.classList.toggle('show-open');
    }
}

document.addEventListener('click', function(e) {
    const submenu = document.getElementById('policySubmenu');
    if (submenu && !submenu.contains(e.target)) {
        submenu.classList.remove('show-open');
    }
});

// Gallery Photo Data for Lightbox Next/Prev
const galleryPhotos = [
    {
        title: 'Interactive Classroom Seminar & Smart ICT Session',
        location: 'Kamalabari Satra, Assam, India · Lat 26.96033°, Long 94.171068°',
        category: 'Academic',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Student Certificate & Prize Distribution',
        location: 'Majuli College Auditorium, Kamalabari · Lat 26.96120°, Long 94.17045°',
        category: 'Events',
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Best College Championship Trophy & Sports Honors',
        location: 'Principal Chamber, Majuli College · Lat 26.96055°, Long 94.17112°',
        category: 'Awards',
        src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'NAAC Peer Committee Review Walk',
        location: 'Garamur Phukoli Chapori, Assam · Lat 26.96210°, Long 94.16890°',
        category: 'Academic',
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Governing Body & Stakeholders Conference Meet',
        location: 'Central Conference Hall, Majuli College · Lat 26.96080°, Long 94.17085°',
        category: 'Events',
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Golden Jubilee Memorial Entrance Gate (1962–2012)',
        location: 'Kamalabari Satra, Assam, India · Lat 26.96010°, Long 94.17220°',
        category: 'Campus',
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
    }
];

let currentLightboxIndex = 0;

// Gallery Page View Switcher with Category Filter
function showGalleryView(category = 'All') {
    const homeSections = document.getElementById('homeMainSections');
    const gallerySection = document.getElementById('galleryPageSection');
    const mvSection = document.getElementById('missionVisionSection');
    const galleryNavBtn = document.getElementById('galleryNavBtn');

    if (homeSections) homeSections.style.display = 'none';
    if (mvSection) mvSection.style.display = 'none';
    if (gallerySection) {
        gallerySection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (galleryNavBtn) {
            galleryNavBtn.classList.add('nav-active');
        }

        // Filter cards if category specified
        filterGalleryCategory(category);
    }

    // Close mobile menu if open
    const navMenu = document.querySelector('.official-nav-menu');
    if (navMenu) navMenu.classList.remove('active');
}

// Mission & Vission Full Page View Switcher (Matching Screenshots 1, 2, 3)
function showMissionVisionView() {
    const homeSections = document.getElementById('homeMainSections');
    const gallerySection = document.getElementById('galleryPageSection');
    const mvSection = document.getElementById('missionVisionSection');
    const galleryNavBtn = document.getElementById('galleryNavBtn');

    if (homeSections) homeSections.style.display = 'none';
    if (gallerySection) gallerySection.style.display = 'none';
    if (mvSection) {
        mvSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (galleryNavBtn) {
        galleryNavBtn.classList.remove('nav-active');
    }

    const navMenu = document.querySelector('.official-nav-menu');
    if (navMenu) navMenu.classList.remove('active');
}

function showHomeView(sectionId) {
    const homeSections = document.getElementById('homeMainSections');
    const gallerySection = document.getElementById('galleryPageSection');
    const mvSection = document.getElementById('missionVisionSection');
    const galleryNavBtn = document.getElementById('galleryNavBtn');

    if (homeSections) {
        homeSections.style.display = 'block';
        if (gallerySection) gallerySection.style.display = 'none';
        if (mvSection) mvSection.style.display = 'none';

        if (galleryNavBtn) {
            galleryNavBtn.classList.remove('nav-active');
        }

        if (sectionId) {
            setTimeout(() => {
                const target = document.getElementById(sectionId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Close mobile menu if open
    const navMenu = document.querySelector('.official-nav-menu');
    if (navMenu) navMenu.classList.remove('active');
}

function filterGalleryCategory(category) {
    const cards = document.querySelectorAll('.gallery-photo-card');
    const pills = document.querySelectorAll('.gallery-pill');

    pills.forEach(pill => {
        if (pill.getAttribute('data-cat') === category) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'All' || cardCat === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Lightbox Photo Viewer with Next / Prev
function openLightboxByIndex(index) {
    if (index >= 0 && index < galleryPhotos.length) {
        currentLightboxIndex = index;
        const item = galleryPhotos[index];
        const lb = document.getElementById('galleryLightbox');
        if (lb) {
            document.getElementById('lbTitle').innerText = item.title;
            document.getElementById('lbLocation').innerText = item.location;
            document.getElementById('lbImage').src = item.src;
            const counter = document.getElementById('lbCounter');
            if (counter) counter.innerText = `${index + 1} / ${galleryPhotos.length}`;
            lb.classList.add('active');
        }
    }
}

function openLightbox(title, location, src) {
    const index = galleryPhotos.findIndex(p => p.src === src);
    if (index !== -1) {
        openLightboxByIndex(index);
    } else {
        const lb = document.getElementById('galleryLightbox');
        if (lb) {
            document.getElementById('lbTitle').innerText = title;
            document.getElementById('lbLocation').innerText = location;
            document.getElementById('lbImage').src = src;
            lb.classList.add('active');
        }
    }
}

function nextLightboxPhoto() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
    openLightboxByIndex(currentLightboxIndex);
}

function prevLightboxPhoto() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    openLightboxByIndex(currentLightboxIndex);
}

function closeLightbox() {
    const lb = document.getElementById('galleryLightbox');
    if (lb) lb.classList.remove('active');
}

// Close modals when clicking outside modal box
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
};

// Keyboard navigation for lightbox
window.onkeydown = function(e) {
    const lb = document.getElementById('galleryLightbox');
    if (lb && lb.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextLightboxPhoto();
        if (e.key === 'ArrowLeft') prevLightboxPhoto();
        if (e.key === 'Escape') closeLightbox();
    }
};

// Mobile Hamburger Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.mobile-hamburger');
    const navMenu = document.querySelector('.official-nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
