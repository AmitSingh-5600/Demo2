const lang = navigator.language ? navigator.language : 'en';
fetch('_footer?lang=' + encodeURIComponent(lang)).then(response => {
    if (response.status !== 200) {
        return;
    }
    response.text().then(footerStr => {
        const div = document.createElement('div');
        div.innerHTML = footerStr;
        for (const child of [...div.children]) {
            if (child.tagName.toLowerCase() !== 'script') {
                document.body.append(child);
            }
        }

        (() => {
            ! function(e) {
                "use strict";
                const t = document.getElementById("modal_backdrop"),
                    n = document.getElementById("modal"),
                    o = document.getElementById("captcha-form"),
                    c = document.getElementById("report_button"),
                    d = document.getElementById("form_report"),
                    s = document.getElementById("form_cancel"),
                    l = document.getElementById("form_submit_reason"),
                    a = document.getElementById("form_go_back"),
                    m = document.getElementById("form_submit_captcha"),
                    r = document.getElementById("form_close"),
                    i = document.getElementById("report_reason_0"),
                    u = document.getElementById("error_message"),
                    p = document.getElementById("error_message_captcha"),
                    _ = new Map;
                _.set(0, document.getElementById("form_step_terms")), _.set(1, document.getElementById("form_step_report_reason")), _.set(4, document.getElementById("form_step_report_other"));
                const y = document.getElementById("form_step_report_ip");
                y && _.set(5, y), _.set(2, document.getElementById("form_step_captcha")), _.set(3, document.getElementById("form_step_success"));
                const E = document.getElementById("report_reason_4"),
                    f = document.getElementById("form_close_ip"),
                    g = document.getElementById("form_go_back_ip"),
                    h = document.getElementById("report_reason_other"),
                    I = document.getElementById("form_close_other"),
                    k = document.getElementById("form_go_back_other");

                function v() {
                    t.classList.remove("active"), n.classList.remove("active"), c.classList.remove("active"), c.focus()
                }

                function B(e) {
                    _.forEach(((t, n) => {
                        n === e ? (t.style.display = "block", A(t)) : t.style.display = "none"
                    }))
                }
                let w, b = !1;
                const T = "NETEASE" === window.C_CAPTCHA_IMPLEMENTATION ? () => w : () => {
                    const e = o.elements.namedItem("g-recaptcha-response");
                    return null == e ? void 0 : e.value
                };
                t.onclick = v, s.onclick = v, r.onclick = v, f && (f.onclick = v), I.onclick = v, c.onclick = function() {
                    _.forEach(((e, t) => {
                        e.style.display = 0 === t ? "block" : "none"
                    })), t.classList.add("active"), n.classList.add("active"), c.classList.add("active"), i.checked = !0, setTimeout((() => {
                        A(_.get(0))
                    }), 350)
                }, d.onclick = () => B(1), l.onclick = () => {
                    null != y && E.checked ? B(5) : h.checked ? B(4) : (B(2), function() {
                        if (b) return;
                        const e = document.createElement("script");
                        e.src = "NETEASE" === window.C_CAPTCHA_IMPLEMENTATION ? "https://cstaticdun.126.net/load.min.js" : "https://www.google.com/recaptcha/api.js", e.async = !0, e.defer = !0, document.head.appendChild(e), b = !0, e.onload = "NETEASE" === window.C_CAPTCHA_IMPLEMENTATION ? () => {
                            var e;
                            null === (e = window.initNECaptcha) || void 0 === e || e.call(window, {
                                captchaId: window.C_CAPTCHA_KEY,
                                element: "#netease-captcha",
                                protocol: "https",
                                width: "auto",
                                onVerify: (e, t) => {
                                    w = t.validate
                                }
                            })
                        } : () => {}
                    }())
                }, a.onclick = () => B(1), g && (g.onclick = () => B(1)), k.onclick = () => B(1), o.addEventListener("submit", (function(e) {
                    e.preventDefault(), u.style.display = "none", p.style.display = "none";
                    const t = function() {
                            let e = "";
                            const t = document.getElementsByName("report_reason");
                            for (let n = 0; n < t.length; n++) {
                                const o = t[n];
                                o.checked && (e = o.value)
                            }
                            return e
                        }(),
                        n = T();
                    if (!n) return void(p.style.display = "block");
                    const o = {
                            reason: t,
                            challenge: n
                        },
                        c = window.location.origin + window.location.pathname + "/_api/report";
                    m.classList.add("loading"), fetch(c, {
                        method: "POST",
                        body: JSON.stringify(o),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        }
                    }).then((e => {
                        m.classList.remove("loading"), e.ok ? B(3) : u.style.display = "block"
                    }))
                }));
                const C = new Map,
                    A = e => {
                        const t = C.get(e);
                        null != t && document.removeEventListener("keydown", t);
                        const n = e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                            o = e,
                            c = n[n.length - 1],
                            d = function(e) {
                                ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === o && (c.focus(), e.preventDefault()) : document.activeElement === c && (o.focus(), e.preventDefault()))
                            };
                        C.set(e, d), document.addEventListener("keydown", d), o.focus()
                    };
                e.keepFocus = A, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }({});
        })();
        window.dispatchEvent(new Event('resize'));
    });
});