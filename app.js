const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// header focus on inputelement and click information
const headerInputElement = $(".header__search-wrap input");
const rootElement = $(".app__wrap");
const bellBtn = $(".header__information-notify");
const boxNotify = $(".header__information-notify-box");
const inforImg = $(".header__information-img");
const boxUser = $(".header__information-user-box");

bellBtn.onclick = function () {
  boxNotify.classList.toggle("isopen");
  boxUser.classList.remove("isopen");
};

bellBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxNotify.addEventListener("click", function (e) {
  e.stopPropagation();
});

headerInputElement.onfocus = function () {
  $(".header__search-wrap").style.border = "1px solid var(--primary-color)";
};
rootElement.onclick = function () {
  $(".header__search-wrap").style.border = "1px solid rgba(0, 0, 0, 0.1)";
  // Close boxNotify when click app
  boxNotify.classList.remove("isopen");
  // Close userBox when click app
  boxUser.classList.remove("isopen");
  // Close addBox
  addIcon.classList.remove("isrotate");
  boxAdd.classList.remove("isopen");
};

headerInputElement.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Click infor
inforImg.onclick = function () {
  boxUser.classList.toggle("isopen");
  boxNotify.classList.remove("isopen");
};

inforImg.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxUser.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Add js

const addBtn = $(".page__sidebar-add-item-link");
const addIcon = $(".page__sidebar-add-item-icon");
const boxAdd = $(".page__sidebar-add-box");

addBtn.onclick = function () {
  addIcon.classList.toggle("isrotate");
  boxAdd.classList.toggle("isopen");
};

addBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxAdd.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Sidebar active

// Slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider

// Courses section
const courseList = $(".page__content-home-courses-list-wrap");
const courseNextBtn = $(".course-next-btn");
const coursePrevBtn = $(".course-prev-btn");
let indexCourses = 0;
const testScroll = $(".page__content-home-courses-list-cover");
const inputScroll = $(".testWidthScroll");

const coursesApp = {
  coursesWidth: 50,
  index: 0,
  courses: [
    {
      name: "HTML, CSS t??? Zero ?????n Hero",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
      link: "./html-css-course.html",
    },
    {
      name: "Javascript c?? b???n",
      img: "	https://cdn.fullstack.edu.vn/f8-production/courses/1.png",
      link: "./javascript-course.html",
    },
    {
      name: "Don't Touch Your Face",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
    },
    {
      name: "Javascript n??ng cao",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/12.png",
    },
    {
      name: "ReactJS",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/13/13.png",
    },
    {
      name: "Node & ExpressJS",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/6.png",
    },
    {
      name: "Ki???n Th???c Nh???p M??n",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
    },
    {
      name: "Responsive V???i Grid System",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/3.png",
    },
    {
      name: "HTML, CSS Tips & Tricks",
      img: "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
    },
  ],

  // Render course
  render: function () {
    const htmlsCourse = this.courses.map((data) => {
      return `
            <div class="page__content-home-courses-item">
                <div class="grid__column">
                    <a href="${data.link}" class="page__content-home-courses-link">
                    <img src="${data.img}" alt="" class="page__content-home-courses-img">
                    </a>
                    <a href="${data.link}" class="page__content-home-courses-description">
                        <h3 class="page__content-home-courses-description-text">${data.name}</h3>
                    </a>
                </div>
            </div>
            `;
    });

    courseList.innerHTML = htmlsCourse.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next courses

    courseNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev courses

    coursePrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform sourses list

  nextBtnClick: function () {
    const coursesWidth = $(".page__content-home-courses-item").clientWidth;
    const courseItems = $$(".page__content-home-courses-item");
    if (indexCourses <= courseItems.length / 3 - 1) {
      indexCourses++;
      courseList.style.transform = `translateX(${
        -coursesWidth * indexCourses * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const coursesWidth = $(".page__content-home-courses-item").clientWidth;
    if (indexCourses > 0) {
      indexCourses--;
      courseList.style.transform = `translateX(${
        -coursesWidth * indexCourses * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const courseItems = $$(".page__content-home-courses-item");
    if (indexCourses === courseItems.length / 3) {
      courseNextBtn.style.opacity = "0";
    } else if (indexCourses < courseItems.length / 3) {
      courseNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexCourses === 0) {
      coursePrevBtn.style.opacity = "0";
    } else if (indexCourses != 0) {
      coursePrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

coursesApp.start();

// Featured-post

const featuredPostList = $(".page__content-home-featured-post-list-wrap");
const featuredPostNextBtn = $(".featured-post-next-btn");
const featuredPostPrevBtn = $(".featured-post-prev-btn");
let indexfeaturedPost = 0;

const featuredPostApp = {
  featuredPostWidth: 50,
  index: 0,
  featuredPost: [
    {
      name: "[C?? b???n] Life cycle c???a Component trong Reactjs",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/923/616999882d4d4.png",
      avatar:
        "https://avatar-redirect.appspot.com/google/115663409059082752836?size=400",
      user: "Long Nguyen",
      date: "6 ng??y tr?????c",
    },
    {
      name: "T???ng h???p c??c t??i li???u h???c Flutter - T??? h???c",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/773/6163ef9082e42.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "L?? Th??nh Trung",
      date: "10 ng??y tr?????c",
    },
    {
      name: "Nh???ng c??ch ????? ti???n b??? v?????t b???c trong l??nh v???c IT ????",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/881/61647ca8983cf.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Name H",
      date: "10 ng??y tr?????c",
    },
    {
      name: 'L???ch s??? ra ?????i "k?? l???" c???a Javascript?',
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/859/6163bd0a46e3c.jpg",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Minh Nguyen Quang",
      date: "11 ng??y tr?????c",
    },
    {
      name: "TyperScrip l?? g??, V?? sao n??n d??ng TyperScript",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1073/6179eca8efb18.jpg",
      avatar:
        "https://avatar-redirect.appspot.com/google/107399353614086722090?size=400",
      user: "Long HD",
      date: "12 ng??y tr?????c",
    },
    {
      name: "H???c nh?? th??? n??o l?? ph?? h???p ?",
      img: "https://f40-zpg.zdn.vn/6414417963368895323/8af558e3d88910d74998.jpg",
      avatar:
        "https://avatar-redirect.appspot.com/google/110021593610685676732?size=400",
      user: "Tien Pham Ngoc",
      date: "15 ng??y tr?????c",
    },
    {
      name: "C??c ????n v??? trong CSS",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/785/615d79fe6078c.jpg",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "V??n Kh???i",
      date: "16 ng??y tr?????c",
    },
    {
      name: "Tailwind css v?? c??ch c??i ?????t c?? b???n",
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1653/61b46a3d757cc.png",
      avatar: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user: "Quang Tr???n Anh",
      date: "18 ng??y tr?????c",
    },
  ],

  // Render featuredPost
  render: function () {
    const htmlsFeaturedPost = this.featuredPost.map((data) => {
      return `
            <div class="page__content-home-featured-post-item">
                <div class="grid__column">
                    <a href="" class="page__content-home-featured-post-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-post-img">
                    </a>
                    <a href="" class="page__content-home-featured-post-description">
                        <h3 class="page__content-home-featured-post-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-post-information">
                        <img src="${data.avatar}" class="page__content-home-featured-post-information-avatar"></img>
                        <p class="page__content-home-featured-post-information-name">${data.user}</p>
                        <span class="page__content-home-featured-post-information-date">${data.date}</span>
                    </div>
                </div>
            </div>
            `;
    });

    featuredPostList.innerHTML = htmlsFeaturedPost.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next featuredPost

    featuredPostNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev featuredPost

    featuredPostPrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform featuredPost list

  nextBtnClick: function () {
    const featuredPostWidth = $(
      ".page__content-home-featured-post-item"
    ).clientWidth;
    const featuredPostItems = $$(".page__content-home-featured-post-item");
    if (indexfeaturedPost <= featuredPostItems.length / 3) {
      indexfeaturedPost++;
      featuredPostList.style.transform = `translateX(${
        -featuredPostWidth * indexfeaturedPost * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const featuredPostWidth = $(
      ".page__content-home-featured-post-item"
    ).clientWidth;
    if (indexfeaturedPost > 0) {
      indexfeaturedPost--;
      featuredPostList.style.transform = `translateX(${
        -featuredPostWidth * indexfeaturedPost * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const featuredPostItems = $$(".page__content-home-featured-post-item");
    if (indexfeaturedPost === Math.ceil(featuredPostItems.length / 3)) {
      featuredPostNextBtn.style.opacity = "0";
    } else if (indexCourses < featuredPostItems.length / 3) {
      featuredPostNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexfeaturedPost === 0) {
      featuredPostPrevBtn.style.opacity = "0";
    } else if (indexfeaturedPost != 0) {
      featuredPostPrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

featuredPostApp.start();

// Featured-video

const featuredVideoList = $(".page__content-home-featured-video-list-wrap");
const featuredVideoNextBtn = $(".featured-video-next-btn");
const featuredVideoPrevBtn = $(".featured-video-prev-btn");
let indexfeaturedVideo = 0;

const featuredVideoApp = {
  featuredVideoWidth: 50,
  index: 0,
  featuredVideo: [
    {
      name: "Sinh vi??n IT ??i th???c t???p c???n bi???t nh???ng g??? | ??i th???c t???p c???n chu???n b??? nh???ng g??? | Th???c t???p IT",
      img: "https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg",
      view: 127.638,
      like: 3.609,
      comment: 194,
      link: "https://www.youtube.com/watch?v=YH-E4Y3EaT4",
    },
    {
      name: '"Code Thi???u Nhi Battle" Tranh Gi??nh Tr?? S???a Size L',
      img: "https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg",
      view: 112.326,
      like: 2.808,
      comment: 147,
      link: "https://www.youtube.com/watch?v=sgq7BH6WxL8",
    },
    {
      name: "Ph????ng ph??p & quan ??i???m h???c l???p tr??nh c???a S??n ?????ng",
      img: "https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg",
      view: 37.807,
      like: 2.425,
      comment: 202,
      link: "https://www.youtube.com/watch?v=DpvYHLUiZpc",
    },
    {
      name: "L??m sao ????? c?? thu nh???p cao v?? ??i xa h??n trong ng??nh IT?",
      img: "https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg",
      view: 37.316,
      like: 1.934,
      comment: 196,
      link: "https://www.youtube.com/watch?v=oF7isq9IjZM",
    },
    {
      name: "L???n tr??? l???i n??y F8 s??? l??m g?? cho c??c b???n? H???c l???p tr??nh ????? ??i l??m t???i F8 n??o!",
      img: "https://i.ytimg.com/vi/ZGmpvhqYSDU/hqdefault.jpg",
      view: 14.699,
      like: 1.818,
      comment: 399,
      link: "https://www.youtube.com/watch?v=ZGmpvhqYSDU",
    },
    {
      name: "Ch???n ng??nh IT c?? sai l???m? Nh???ng tr???i nghi???m th???c t??? sau 2 th??ng l??m vi???c t???i doanh nghi???p?",
      img: "https://i.ytimg.com/vi/2sg1yNl1WvE/hqdefault.jpg",
      view: 37.33,
      like: 1.451,
      comment: 159,
      link: "https://www.youtube.com/watch?v=2sg1yNl1WvE&feature=youtu.be",
    },
    {
      name: "H???c Flexbox qua v?? d???",
      img: "https://i.ytimg.com/vi/G19jZzK5FWI/hqdefault.jpg",
      view: 60.416,
      like: 1.094,
      comment: 94,
      link: "https://www.youtube.com/watch?v=YH-E4Y3EaT4",
    }
  ],

  // Render featuredVideo
  render: function () {
    const htmlsFeaturedPost = this.featuredVideo.map((data) => {
      return `
            <div class="page__content-home-featured-video-item">
                <div class="grid__column">
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-video-img">
                    </a>
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-description">
                        <h3 class="page__content-home-featured-video-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-video-information">
                        <div class="page__content-home-featured-video-view">
                            <i class="fas fa-eye"></i>
                            <strong>${data.view}</strong>
                        </div>
                        <div class="page__content-home-featured-video-like">
                            <i class="fas fa-thumbs-up"></i>
                            <strong>${data.like}</strong>
                        </div>
                        <div class="page__content-home-featured-video-comment">
                            <i class="fas fa-comment"></i>
                            <strong>${data.comment}</strong>
                        </div>
                    </div>
                </div>
            </div>
            `;
    });

    featuredVideoList.innerHTML = htmlsFeaturedPost.join("");
  },

  handleEvent: function () {
    const _this = this;
    // Click button next featuredVideo

    featuredVideoNextBtn.onclick = function () {
      _this.nextBtnClick();
      _this.nextBtnDisable();
      _this.prevBtnDisable();
    };
    // Click button prev featuredVideo

    featuredVideoPrevBtn.onclick = function () {
      _this.prevBtnClick();
      _this.prevBtnDisable();
      _this.nextBtnDisable();
    };
  },

  // Transform featuredVideo list

  nextBtnClick: function () {
    const featuredVideoWidth = $(
      ".page__content-home-featured-video-item"
    ).clientWidth;
    const featuredVideoItems = $$(".page__content-home-featured-video-item");
    if (indexfeaturedVideo <= featuredVideoItems.length / 3) {
      indexfeaturedVideo++;
      featuredVideoList.style.transform = `translateX(${
        -featuredVideoWidth * indexfeaturedVideo * 2
      }px)`;
    }
  },

  prevBtnClick: function () {
    const featuredVideoWidth = $(
      ".page__content-home-featured-video-item"
    ).clientWidth;
    if (indexfeaturedVideo > 0) {
      indexfeaturedVideo--;
      featuredVideoList.style.transform = `translateX(${
        -featuredVideoWidth * indexfeaturedVideo * 2
      }px)`;
    }
  },

  // Disable Next and Prev button

  nextBtnDisable: function () {
    const featuredVideoItems = $$(".page__content-home-featured-video-item");
    if (indexfeaturedVideo === Math.ceil(featuredVideoItems.length / 3)) {
      featuredVideoNextBtn.style.opacity = "0";
    } else if (indexCourses < featuredVideoItems.length / 3) {
      featuredVideoNextBtn.style.opacity = "1";
    }
  },

  prevBtnDisable: function () {
    if (indexfeaturedVideo === 0) {
      featuredVideoPrevBtn.style.opacity = "0";
    } else if (indexfeaturedVideo != 0) {
      featuredVideoPrevBtn.style.opacity = "1";
    }
  },
  start: function () {
    this.render();
    this.handleEvent();
    this.prevBtnDisable();
  },
};

featuredVideoApp.start();

//warning
const pageContent = document.querySelector(".page__wrap");
var testLink = pageContent.getElementsByTagName("a");

const noticeWarn = document.querySelector("#notice");
for (let i = 0; i < testLink.length; i++) {
  const testLinks = testLink[i];
  if (
    testLinks.getAttribute("href") === "undefined" ||
    testLinks.getAttribute("href") === ""
  ) {
    testLinks.setAttribute("href", "#");
    testLinks.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  testLinks.onclick = function () {
    if (testLinks.getAttribute("href") === "#") {
      const warning = document.createElement("div");
      warning.classList.add("notice__warn");
      warning.innerHTML = `
                <div class="notice__warn-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="notice__warn-content">
                    <h3 class="notice__warn-heading">Th??ng b??o</h3>
                    <span class="notice__warn-message">N???i dung ??ang trong qu?? tr??nh ho??n thi???n !</span>
                </div>
            `;
      noticeWarn.appendChild(warning);

      setTimeout(function () {
        noticeWarn.removeChild(warning);
      }, 2500);
    }
  };
}
//warning

const menuRespon = document.querySelector(".header__icon-menu");
const sidebarRespon = document.querySelector(".side__bar-respon");
const sidebarLeft = document.querySelector(".side__bar-respon-left");
const exitSibar = document.querySelector(".side__bar-respon-right");

menuRespon.onclick = function () {
  sidebarRespon.classList.add("iscover-fill");
  sidebarLeft.classList.add("isopen-sidebar-respon");
};

exitSibar.onclick = function () {
  sidebarRespon.classList.remove("iscover-fill");
  sidebarLeft.classList.remove("isopen-sidebar-respon");
};
