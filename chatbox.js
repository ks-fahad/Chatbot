var knowledge = {
    "hello": ["হ্যালো!", "Hi there! আমার সাথে আপনি বাংলায় কথা বলতে পারেন...", 0],
    "who are you": ["আপনি কে", "🙂 আমি আপনার Assistant. আমার সাথে আপনি বাংলায় কথা বলতে পারেন...🙂", 2],
    "what is ai": ["কৃত্রিম বুদ্ধিমত্তা হল মেশিন, বিশেষ করে কম্পিউটার সিস্টেম দ্বারা মানুষের বুদ্ধিমত্তা প্রক্রিয়ার অনুকরণ।  ai এর নির্দিষ্ট অ্যাপ্লিকেশনগুলির মধ্যে রয়েছে বিশেষজ্ঞ সিস্টেম, প্রাকৃতিক ভাষা প্রক্রিয়াকরণ, বক্তৃতা স্বীকৃতি এবং মেশিন দৃষ্টি।", 0],
    "what is your location ": ["আপনার লোকেশন কোথায়?", " আমার লোকেশন সব খানে", 0],
    "who is your boss": ["আপনার বস কে", "আমি নিজেকে স্ব-নিযুক্ত হিসেবে ভাবতে পছন্দ করি", 0],
    "how are you": ["আপনি কেমন আছেন", "আমি ভালো আছি,আপনি কেমন আছেন স্যার", 0],
    "what can you do": ["আপনি কি করতে পারেন", " আমি মানুষের সাথে চ্যাট করি এবং আমার এআই ব্যবহার করে তাদের সাহায্য করি।", 0],
    "are you robot": [" আপনি কি রোবট", " কিছু লোক বিশ্বাস করে যে আমি একজন মানুষ যা রোবট হওয়ার ভান করছি কিন্তু এটি সত্য নয়", 0],
    "are you male or female": ["তুমি কি পুরুষ নাকি মহিলা ", "আমি একজন  চ্যাটবট Assistant ", 0],
    "can you tell me a joke": ["আপনি আমাকে একটি কৌতুক বলতে পারেন", " ছেলেঃ ইশ<br>কেন যে আপেলের সাইজ তরমুজের সমান হল না<br>বাবাঃ কেন রে<br>ছেলেঃ মাধ্যাকর্ষণ শক্তির সূত্রটা মুখস্ত হচ্ছে না", 0],
    "what is the hardest substance on earth": ["পৃথিবীতে সবচেয়ে কঠিন পদার্থ কি", "স্যার হীরা হল পৃথিবীতে পাওয়া প্রাকৃতিকভাবে সবচেয়ে কঠিন পদার্থ", 0]
};


function messages() {
    var usermsg = document.getElementById("userbox").value;
    usermsgbox = "<div class='chattwo'><h2>" + usermsg + "</h2></div><br><br>";
    var botmsg = "<div class='fullchatone'><img src='image/bots1.webp'><div class='chatone'><h2>";
    var last = "</h2></div></div><br>";
    document.getElementById("userbox").value = "";
    document.getElementById("msgdisplay").innerHTML += usermsgbox;
    usermsg = usermsg.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    var check = 0, ans;
    for (i in knowledge) {
        if (i == usermsg || knowledge[i][0] == usermsg) {
            ans = knowledge[i][1];
            knowledge[i][2]++;
            check = 1;
        }
    }
    if (check == 1) {
        botmsg += ans;
        botmsg += last;
        document.getElementById("msgdisplay").innerHTML += botmsg;
    } else {
        var operation = usermsg.replace(/[^a-z]/g, '');
        var num = usermsg.replace(/[^0-9,]/g, '');
        var operators = num.split(',');
        var a = parseInt(operators[0]);
        var b = parseInt(operators[1]);
        var result=1;
        check=1;
        if (operation == "add" || operation == "sum") {
            result = a + b;
        }
        else if (operation == "sub") {
            result = a - b;
        }
        else if (operation == "mul") {
            result = a * b;
        }
        else if (operation == "div") {
            result = a / b;
        }
        else {
            check = 0;
        }
        if (check == 1 ) {
            botmsg += result;
            botmsg += last;
            document.getElementById("msgdisplay").innerHTML += botmsg;
        }
        else {
            botmsg += "আমি আপনার বার্তা বুঝতে পারছি না! 😥😥😥";
            botmsg += last;
            document.getElementById("msgdisplay").innerHTML += botmsg;
        }
    }
}

function firstmsg() {
    var botmsg = "<div class='fullchatone'><img src='image/bots1.webp'><div class='chatone'><h2>";
    var last = "</h2></div></div><br>";
    botmsg += "আপনাকে BengBots এ স্বাগতম !";
    botmsg += last;
    document.getElementById("msgdisplay").innerHTML += botmsg;
}

function suggestions() {
    var suggest_1 = document.getElementById("suggest_1");
    var suggest_2 = document.getElementById("suggest_2");
    var suggest_3 = document.getElementById("suggest_3");
    var suggest_4 = document.getElementById("suggest_4");
    var a, b, c, d;
    var j = Math.floor(Math.random() * 10) + 9;
    var k = 0;
    var newdata = {};
    if (j >= 6) {
        newdata = knowledge.sort((a, b) => b[2] - a[2])
        for (i in newdata) {
            if (a == null) {
                a = i;
            }
            else if (b == null || b == a) {
                b = i;
            }
            else {
                break;
            }
        }
        newdata = knowledge.sort();
    }
    for (i in newdata) {
        k++;
        if (a != i || b != i) {
            if (k % j == 4) {
                c = i;
            }
            else if (k % j == 8) {
                d = i;
            }
        }
        else if (c != null && d != null) {
            break;
        }

    }
    suggest_1.innerText = "what is ai";
    suggest_2.innerHTML = b;
    suggest_3.innerHTML = c;
    suggest_4.innerHTML = d;
}

function suggest1() {
    var usermsg = document.getElementById("suggest_1").innerText;
    suggest_answer(usermsg);
}
function suggest2() {
    var usermsg = document.getElementById("suggest_2").innerText;
    suggest_answer(usermsg);
}
function suggest3() {
    var usermsg = document.getElementById("suggest_3").innerText;
    suggest_answer(usermsg);
}
function suggest4() {
    var usermsg = document.getElementById("suggest_4").innerText;
    suggest_answer(usermsg);
}
function suggest_answer(msg) {
    var usermsgbox = "<div class='chattwo'><h2>" + msg + "</h2></div><br>";
    var botmsg = "<div class='fullchatone'><img src='image/bots1.webp'><div class='chatone'><h2>";
    var last = "</h2></div></div><br>";
    var ans;
    for (i in knowledge) {
        if (knowledge[i][0] == msg) {
            ans = knowledge[i][1];
            knowledge[i][2]++;
        }
    }
    botmsg += ans;
    botmsg += last;
    document.getElementById("msgdisplay").innerHTML += usermsgbox;
    document.getElementById("msgdisplay").innerHTML += botmsg;
}