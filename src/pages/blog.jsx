import React from "react";
import { Link } from "react-router-dom";

export const BLOG = [
  {
    id: 1,
    blogTitle: "Black Tea ၏ ကောင်းကျိုးများ",
    blogDescription:
      "Black Tea သည် ကမ္ဘာပေါ် တွင်လူကြိုက်အများဆုံး လက်ဖက်ရည်ဖြစ်သည်။ ၄င်းသည် အခြားလက်ဖက်ခြောက်များနှင့်မတူဘဲ လက်ဖက်ခြောက်ရွက်သည် အရွက်အတွင်းရှိ ဆဲလ်များကို အောက်ဆီဂျင်အဖြစ်ထုတ်လွှတ်သည့် ကျယ်ပြန့်သောဓာတ်တိုးဖြစ်စဥ်ကိုခံယူသည်။",
    blogLink:
      "https://m.facebook.com/story.php?story_fbid=pfbid021fpjF797yVv9UtSDa2gD4V6oN6eqBVdqwp7rZT6bdKu8fyB1X6M9rQWKb2wEMD6Yl&id=100064007971916&mibextid=Nif5oz",
  },
  {
    id: 2,
    blogTitle: "Jasmine Green Tea ၏ ကောင်းကျိုးများ",
    blogDescription:
      "Jasmine green tea သည် တရုတ်နိုင်ငံမှ လူသိများသော စံပယ် လက်ဖက်ရည်သည်ကမ္ဘာတစ်ဝှမ်းတွင်ရေပန်းစားသောဖျော်ရည်တစ်မျိုး ဖြစ်လာခဲ့သည်။ လက်ဖက်စိမ်း သိုမဟုတ် အဖြူရောင်လက်ဖက်ရွက် ကို စံပယ်ပန်းပွင့်ချပ်များနှင့်ပေါင်းစပ်ပြုလုပ်ထားသောကြောင့်လက်ဖက် စိမ်းနှင့်ဆက်စပ်သောကျန်းမာရေးအကျိုးကျေးဇူးများအပြင်အခြားအရာ များကိုပါ ပေးဆောင်ပါသည်။",
    blogLink:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02RZotRAUuuvZ3B2HKBFMcbzzxbRFoyE8E8ctrfHGJs7nPeq2J1ykX6cZhX28KDEV9l&id=100064007971916",
  },
  {
    id: 3,
    blogTitle: "Green Tea မြင်းခွာ-သံပုရာ-အဆီကျ သဘာဝလက်ဖက်ခြောက် ",
    blogDescription:
      "GreenTeaကကျန်းမာတဲ့ ကိုယ်အလေးချိန်ကို ထိန်းပေးထားနိုင်ပါတယ်။ GreenTea မှာ ခန္ဓာကိုယ်ထဲက အဆိပ်အတောက် တွေကို ဖယ်ရှားပေးပြီး အဆီ တွေကို လောင်ကျွမ်းစေတဲ့ ဓာတ်တွေ ပါဝင်နေ ပါတယ်။",
    blogLink:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02s87oDyVvfxg5tVC4z5UzCvMxPo4H1K1euwUpkd353qeLQvYTrLDm8My1e2X7aNacl&id=100064007971916",
  },
  {
    id: 4,
    blogTitle: "မြင်းခွာရွက် ကျန်းမာရေးလက်ဖက်ခြောက် ",
    blogDescription:
      "မြင်းခွာရွက်ပင်ကိုကျွန်တော်တိုနိုင်ငံမှာ သဘာ၀အလေ့ကျ ပေါက်ပင် အနေနဲ့လည်းတွေ့နိုင်သလို စိုက်ပျိုးပင်အနေနဲ့လည်းတွေ့နိုင်ပါတယ်။ နေရာ အနံ့မှာ ပေါက်ရောက်ပါတယ်။ ရေစပ်စပ်ရှိတဲ့နေရာတွေမှာ ပိုပြီးပေါက်ပွား ပါတယ်။ မြေလျှောက်တွားတွား ပင်ဖြစ်ပြီး နှစ်ရှည်ခံပင်အမျိုး အစား ဖြစ်ပါတယ်။",
    blogLink:
      "https://m.facebook.com/story.php?story_fbid=pfbid02Afr93rmqamQRnrzZ5USPFFFZbbaqqKVRQPRBR6z5b11BXopeiY1tSVMFsbYH9A8Wl&id=100064007971916&mibextid=Nif5oz",
  },
];
export const Blog = () => {
  return (
    <div>
      <div className="w-[80%] md:w-[60%] mx-auto my-6 mt-8">
        {BLOG.map((blog) => (
          <div
            key={blog.id}
            className="mb-8 bg-gray-300 text-black p-4 rounded-xl shadow-3xl"
          >
            <h1 className="text-red-600 text-xl font-bold tracking-wider mb-3">
              {blog.blogTitle}
            </h1>
            <p className="mb-6">{blog.blogDescription}</p>
            <Link
              to={blog.blogLink}
              className="bg-blue-700 p-2 md:px-4 rounded-lg text-yellow-50 transition ease-in-out delay-100 hover:bg-lime-800"
            >
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
