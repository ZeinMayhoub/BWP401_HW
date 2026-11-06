// بيانات الفعاليات الثمانية
const events = [
  {
    id: "ai-conference",
    title: "المؤتمر السنوي للذكاء الاصطناعي وتطبيقاته",
    category: "تقني",
    categoryClass: "bg-category-tech",
    shortDescription:
      "استعراض لأبرز مشاريع تخرج الطلاب في مجالات التعلم العميق وتحليل البيانات الكبيرة بحضور خبراء القطاع.",
    description:
      "يهدف المؤتمر إلى تسليط الضوء على أحدث الابتكارات التي أنجزها طلاب وخريجو الجامعة في مجالات التعلم العميق ومعالجة اللغات الطبيعية، مع عروض حية لمشاريع التخرج وجلسات نقاشية مع شركات البرمجيات.",
    date: "15 نوفمبر 2026",
    time: "10:00 صباحًا – 3:00 عصرًا",
    location: "كلية الهندسة الكهربائية – جامعة حلب",
    image: "./assets/imgs/فعالية1/event1-promo.jpg",
    imageAlt: "الصورة الترويجية للمؤتمر السنوي للذكاء الاصطناعي وتطبيقاته",
    gallery: [
      {
        src: "./assets/imgs/فعالية1/img1.jpg",
        alt: "طالب جامعي يستعرض مشروعًا في مجال الذكاء الاصطناعي",
      },
      {
        src: "./assets/imgs/فعالية1/img2.jpg",
        alt: "الحضور خلال جلسات المؤتمر السنوي للذكاء الاصطناعي",
      },
      {
        src: "./assets/imgs/فعالية1/img3.jpg",
        alt: "عرض تطبيقي لأحد مشاريع التعلم العميق",
      },
    ],
    map: "./assets/imgs/فعالية1/event1-map.png",
    mapAlt: "خريطة توضح موقع كلية الهندسة الكهربائية في جامعة حلب",
    relatedId: "web-workshop",
  },
  {
    id: "web-workshop",
    title: "ورشة عمل أساسيات تطوير تطبيقات الويب",
    category: "تقني",
    categoryClass: "bg-category-tech",
    shortDescription:
      "دورة عملية مكثفة لتعلم أساسيات بناء وتصميم المواقع الإلكترونية باستخدام HTML5 وCSS3 وJavaScript.",
    description:
      "ورشة تدريبية موجهة للمبتدئين لتمكينهم من بناء أول موقع إلكتروني متكامل وتفاعلي خاص بهم خطوة بخطوة وبإشراف نخبة من أساتذة البرمجة.",
    date: "22 نوفمبر 2026",
    time: "1:00 ظهرًا – 4:00 عصرًا",
    location: "كلية المعلوماتية – جامعة اللاذقية",
    image: "./assets/imgs/فعالية2/event2-promo.jpg",
    imageAlt: "الصورة الترويجية لورشة أساسيات تطوير تطبيقات الويب",
    gallery: [
      {
        src: "./assets/imgs/فعالية2/img1.jpg",
        alt: "مدرب يشرح أساسيات تطوير مواقع الويب",
      },
      {
        src: "./assets/imgs/فعالية2/img2.jpg",
        alt: "طلاب يطبقون تمارين HTML وCSS على الحواسيب",
      },
      {
        src: "./assets/imgs/فعالية2/img3.jpg",
        alt: "شاشة حاسوب تعرض شيفرة HTML وCSS",
      },
    ],
    map: "./assets/imgs/فعالية2/event2-map.png",
    mapAlt: "خريطة توضح موقع كلية المعلوماتية في جامعة اللاذقية",
    relatedId: "ai-conference",
  },
  {
    id: "poetry-evening",
    title: "أمسية شعرية وتوقيع ديوان «برمجيات الروح»",
    category: "ثقافي",
    categoryClass: "bg-category-culture",
    shortDescription:
      "لقاء أدبي يجمع المواهب الشعرية من طلاب الجامعة لقراءة أحدث نصوصهم الأدبية وتوقيع إصداراتهم الأولى.",
    description:
      "تستضيف الأمسية الكاتب الشاب لتوقيع ديوانه الجديد، وتتضمن الأمسية قراءات شعرية من إبداعات الطلاب وفقرة نقدية تحليلية ومسابقة للأدباء الهواة.",
    date: "25 نوفمبر 2026",
    time: "4:00 عصرًا – 7:00 مساءً",
    location: "المركز الثقافي العربي – مدينة درعا",
    image: "./assets/imgs/فعالية3/event3-promo.jpg",
    imageAlt: "الصورة الترويجية للأمسية الشعرية وتوقيع ديوان برمجيات الروح",
    gallery: [
      {
        src: "./assets/imgs/فعالية3/img1.jpg",
        alt: "شاعر يلقي قصيدة خلال الأمسية الأدبية",
      },
      {
        src: "./assets/imgs/فعالية3/img2.jpg",
        alt: "ديوان برمجيات الروح المعروض خلال حفل التوقيع",
      },
      {
        src: "./assets/imgs/فعالية3/img3.jpg",
        alt: "الحضور أثناء الاستماع إلى القراءات الشعرية",
      },
    ],
    map: "./assets/imgs/فعالية3/event3-map.png",
    mapAlt: "خريطة توضح موقع المركز الثقافي العربي في مدينة درعا",
    relatedId: "book-fair",
  },
  {
    id: "book-fair",
    title: "معرض الكتاب الجامعي السنوي",
    category: "ثقافي",
    categoryClass: "bg-category-culture",
    shortDescription:
      "معرض شامل يضم مئات العناوين في العلوم، الأدب، والتكنولوجيا بتخفيضات خاصة للطلاب.",
    description:
      "يوفر المعرض منصة تجمع دور نشر مختلفة مع مؤلفات أعضاء هيئة التدريس والطلاب، ويصاحبه ندوات ثقافية وحفلات توقيع كتب يومية طوال أيام المعرض.",
    date: "1 – 5 ديسمبر 2026",
    time: "9:00 صباحًا – 6:00 مساءً",
    location: "المركز الثقافي العربي القديم – طرطوس",
    image: "./assets/imgs/فعالية4/event4-promo.jpg",
    imageAlt: "الصورة الترويجية لمعرض الكتاب الجامعي السنوي",
    gallery: [
      {
        src: "./assets/imgs/فعالية4/img1.jpg",
        alt: "أرفف تضم مجموعة متنوعة من الكتب في المعرض",
      },
      {
        src: "./assets/imgs/فعالية4/img2.jpg",
        alt: "زوار يتصفحون الكتب في أجنحة المعرض",
      },
      {
        src: "./assets/imgs/فعالية4/img3.jpg",
        alt: "ركن لعرض الكتب والمؤلفات الجامعية",
      },
    ],
    map: "./assets/imgs/فعالية4/event4-map.png",
    mapAlt: "خريطة توضح موقع المركز الثقافي العربي القديم في طرطوس",
    relatedId: "poetry-evening",
  },
  {
    id: "chess-tournament",
    title: "بطولة الجامعة الافتراضية للشطرنج",
    category: "رياضي",
    categoryClass: "bg-category-sport",
    shortDescription:
      "منافسات قوية بين طلاب الكليات المختلفة في دوري الشطرنج السنوي لاختيار ممثلي الجامعة.",
    description:
      "هل تمتلك عقلًا استراتيجيًا وقدرة على التخطيط؟ شارك معنا في بطولة الشطرنج السنوية التي تنظمها عمادة شؤون الطلاب مع جوائز مالية وكؤوس للمراكز الثلاثة الأولى.",
    date: "20 نوفمبر 2026",
    time: "1:00 ظهرًا – 6:00 مساءً",
    location: "صالة الشطرنج في نادي عمال حمص الرياضي",
    image: "./assets/imgs/فعالية5/event5-promo.jpg",
    imageAlt: "الصورة الترويجية لبطولة الجامعة الافتراضية للشطرنج",
    gallery: [
      {
        src: "./assets/imgs/فعالية5/img1.jpg",
        alt: "طالبان يتنافسان في مباراة شطرنج",
      },
      {
        src: "./assets/imgs/فعالية5/img2.jpg",
        alt: "رقعة شطرنج وقطع اللعب خلال البطولة",
      },
      {
        src: "./assets/imgs/فعالية5/img3.jpg",
        alt: "طلاب يتابعون إحدى مباريات بطولة الشطرنج",
      },
    ],
    map: "./assets/imgs/فعالية5/event5-map.png",
    mapAlt: "خريطة توضح موقع صالة الشطرنج في نادي عمال حمص الرياضي",
    relatedId: "basketball-3x3",
  },
  {
    id: "basketball-3x3",
    title: "دوري كرة السلة الثلاثي (3x3)",
    category: "رياضي",
    categoryClass: "bg-category-sport",
    shortDescription:
      "منافسات حماسية لفرق كرة السلة الثلاثية بين مختلف كليات الجامعة وسط أجواء تنافسية مشجعة.",
    description:
      "ينظم نادي الأنشطة الرياضية بطولة كرة السلة الثلاثية بمشاركة فرق تمثل كافة التخصصات الأكاديمية، بهدف تعزيز الروح الرياضية ولياقة الطلاب البدنية.",
    date: "28 نوفمبر 2026",
    time: "3:00 عصرًا – 7:00 مساءً",
    location: "مجمع الحمدانية الرياضي",
    image: "./assets/imgs/فعالية6/event6-promo.jpg",
    imageAlt: "الصورة الترويجية لدوري كرة السلة الثلاثي",
    gallery: [
      {
        src: "./assets/imgs/فعالية6/img1.jpg",
        alt: "فريقان جامعيان يتنافسان في مباراة كرة سلة",
      },
      {
        src: "./assets/imgs/فعالية6/img2.jpg",
        alt: "لاعب يسدد الكرة باتجاه السلة",
      },
      {
        src: "./assets/imgs/فعالية6/img3.jpg",
        alt: "لاعبو الفرق المشاركة خلال منافسات البطولة",
      },
    ],
    map: "./assets/imgs/فعالية6/event6-map.png",
    mapAlt: "خريطة توضح موقع مجمع الحمدانية الرياضي",
    relatedId: "chess-tournament",
  },
  {
    id: "volunteer-day",
    title: "يوم العمل التطوعي الجامعي «نعمل لنرتقي»",
    category: "اجتماعي",
    categoryClass: "bg-category-social",
    shortDescription:
      "حملة تطوعية طلابية تهدف لخدمة المجتمع المحلي، تشمل تشجير الحدائق وتنظيم ورش توعوية.",
    description:
      "فرصة رائعة لتعزيز قيم العطاء والمسؤولية المجتمعية لدى الطلاب. سنقوم بتنفيذ عدة مبادرات ميدانية وبيئية داخل وخارج أسوار الجامعة بالتعاون مع الجمعيات المحلية.",
    date: "5 ديسمبر 2026",
    time: "8:00 صباحًا – 2:00 ظهرًا",
    location: "حديقة الثورة – مدينة حماة",
    image: "./assets/imgs/فعالية7/event7-promo.jpg",
    imageAlt: "الصورة الترويجية ليوم العمل التطوعي الجامعي نعمل لنرتقي",
    gallery: [
      {
        src: "./assets/imgs/فعالية7/img1.jpg",
        alt: "طلاب يشاركون في زراعة الأشجار ضمن الحملة التطوعية",
      },
      {
        src: "./assets/imgs/فعالية7/img2.jpg",
        alt: "متطوعون يعملون على تنظيف الحديقة وتنظيمها",
      },
      {
        src: "./assets/imgs/فعالية7/img3.jpg",
        alt: "طلاب يشاركون في نشاط توعوي لخدمة المجتمع المحلي",
      },
    ],
    map: "./assets/imgs/فعالية7/event7-map.png",
    mapAlt: "خريطة توضح موقع حديقة الثورة في مدينة حماة",
    relatedId: "new-students",
  },
  {
    id: "new-students",
    title: "اللقاء التعريفي للطلاب المستجدين والأنشطة الطلابية",
    category: "اجتماعي",
    categoryClass: "bg-category-social",
    shortDescription:
      "لقاء ترحيبي تفاعلي لتعريف الطلاب الجدد بالنوادي الطلابية والخدمات الجامعية وأنشطة الحياة الجامعية.",
    description:
      "يهدف اللقاء إلى دمج الطلاب المستجدين في البيئة الجامعية، واستعراض كافة الأندية الاجتماعية والثقافية والرياضية المتاحة وكيفية الانتساب إليها عبر منصة الجامعة.",
    date: "10 ديسمبر 2026",
    time: "10:00 صباحًا – 1:00 ظهرًا",
    location: "المسرح القومي – شارع هنانو، طرطوس",
    image: "./assets/imgs/فعالية8/event8-promo.jpg",
    imageAlt: "الصورة الترويجية للقاء التعريفي بالطلاب المستجدين",
    gallery: [
      {
        src: "./assets/imgs/فعالية8/img1.jpg",
        alt: "طلاب مستجدون يحضرون اللقاء التعريفي الجامعي",
      },
      {
        src: "./assets/imgs/فعالية8/img2.jpg",
        alt: "عرض تعريفي يوضح النوادي والأنشطة الطلابية",
      },
      {
        src: "./assets/imgs/فعالية8/img3.jpg",
        alt: "طلاب يتعرفون على الخدمات والأنشطة الجامعية",
      },
    ],
    map: "./assets/imgs/فعالية8/event8-map.png",
    mapAlt: "خريطة توضح موقع المسرح القومي في شارع هنانو بطرطوس",
    relatedId: "volunteer-day",
  },
];

// قراءة معرّف الفعالية من الرابط، مثل event.html?id=ai-conference
const params = new URLSearchParams(window.location.search);
const eventId = params.get("id");

const eventContent = document.getElementById("event-content");
const relatedEvents = document.getElementById("related-events");

// البحث عن الفعالية المطلوبة
const currentEvent = events.find((event) => event.id === eventId);

if (!currentEvent) {
  eventContent.innerHTML = `
    <div class="alert alert-warning" role="alert">
      عذرًا، لم يتم العثور على الفعالية المطلوبة.
      <a href="events.html" class="alert-link">العودة إلى جميع الفعاليات</a>
    </div>
  `;
  relatedEvents.innerHTML = "";
} else {
  // إنشاء صور معرض الفعالية
  const galleryHTML = currentEvent.gallery
    .map(
      (image) => `
        <div class="col-4">
          <div class="ratio ratio-4x3">
            <img
              src="${image.src}"
              alt="${image.alt}"
              class="w-100 h-100 object-fit-cover rounded-3"
            >
          </div>
        </div>
      `,
    )
    .join("");

  // عرض تفاصيل الفعالية باستخدام مكونات Bootstrap
  eventContent.innerHTML = `
    <div class="row g-4">
      <!-- Main Information -->
      <div class="col-12 col-lg-8">
        <article class="card rounded-4 overflow-hidden shadow-sm">
          <div class="ratio ratio-16x9">
            <img
              src="${currentEvent.image}"
              alt="${currentEvent.imageAlt}"
              class="w-100 h-100 object-fit-cover"
            >
          </div>
          <div class="card-body p-4">
            <span class="badge rounded-pill ${currentEvent.categoryClass} mb-3">
              ${currentEvent.category}
            </span>
            <h1 id="event-heading" class="h2 mb-3">
              ${currentEvent.title}
            </h1>
            <p class="text-body-secondary lh-lg mb-4">
              ${currentEvent.shortDescription}
            </p>
            <hr class="my-4">
            <h2 class="h5 mb-3">عن الفعالية</h2>
            <p class="text-body-secondary lh-lg mb-0">
              ${currentEvent.description}
            </p>
          </div>
        </article>
        <!-- Event Image Gallery -->
        <section class="mt-4" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" class="h5 mb-3">معرض الصور</h2>
          <div class="row g-2">
            ${galleryHTML}
          </div>
        </section>
        <!-- Static Location Map -->
        <section class="mt-4" aria-labelledby="map-heading">
          <h2 id="map-heading" class="h5 mb-3">موقع الفعالية على الخريطة</h2>
          <div class="ratio ratio-16x9">
            <img
              src="${currentEvent.map}"
              alt="${currentEvent.mapAlt}"
              class="w-100 h-100 object-fit-cover rounded-3 border shadow-sm"
            >
          </div>
        </section>
      </div>
      <!-- Event Details Sidebar -->
      <aside class="col-12 col-lg-4">
        <div class="card rounded-4 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h5 mb-4">موعد ومكان الفعالية</h2>
            <div class="d-flex gap-3 mb-4">
              <i class="bi bi-calendar-event fs-5 text-primary" aria-hidden="true"></i>
              <div>
                <h3 class="h6 mb-1">التاريخ</h3>
                <p class="text-body-secondary small mb-0">${currentEvent.date}</p>
              </div>
            </div>
            <div class="d-flex gap-3 mb-4">
              <i class="bi bi-clock fs-5 text-primary" aria-hidden="true"></i>
              <div>
                <h3 class="h6 mb-1">الوقت</h3>
                <p class="text-body-secondary small mb-0">${currentEvent.time}</p>
              </div>
            </div>
            <div class="d-flex gap-3 mb-4">
              <i class="bi bi-geo-alt fs-5 text-primary" aria-hidden="true"></i>
              <div>
                <h3 class="h6 mb-1">الموقع</h3>
                <p class="text-body-secondary small mb-0">${currentEvent.location}</p>
              </div>
            </div>
            <hr class="my-4">
            <div class="d-grid gap-2 mb-3">
              <button
                type="button"
                class="btn btn-primary w-100 add-to-calendar-btn"
                data-event-id="${currentEvent.id}"
              >
                <i class="bi bi-calendar-plus" aria-hidden="true"></i>
                أضف للتقويم
              </button>
              <button
                type="button"
                class="btn btn-outline-primary w-100 share-event-btn"
                data-event-id="${currentEvent.id}"
              >
                <i class="bi bi-share" aria-hidden="true"></i>
                شارك
              </button>
            </div>
            <a href="events.html" class="btn btn-outline-primary w-100">
              <i class="bi bi-arrow-right me-1" aria-hidden="true"></i>
              العودة إلى جميع الفعاليات
            </a>
          </div>
        </div>
      </aside>
    </div>
  `;

  // عرض الفعالية ذات الصلة كرابط
  const relatedEvent = events.find(
    (event) => event.id === currentEvent.relatedId,
  );

  if (relatedEvent) {
    relatedEvents.innerHTML = `
      <div class="col-12">
        <a
          href="event.html?id=${relatedEvent.id}"
          class="link-primary text-decoration-none"
        >
          <i class="bi bi-arrow-left-circle ms-1" aria-hidden="true"></i>
          ${relatedEvent.title}
        </a>
      </div>
    `;
  } else {
    relatedEvents.innerHTML = "";
  }
}
