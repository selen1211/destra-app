"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[322], {
    24230: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return x
            }
        });
        var n = a(85893)
          , s = a(31376)
          , i = a(7583)
          , r = a(43594)
          , l = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_destraCoreZ2Address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"destraCoreZ2Address","type":"address"}],"name":"DestraCoreZ2Set","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"nftStorageHash","type":"string"}],"name":"HashAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"nftStorageHash","type":"string"}],"name":"HashReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"oldNFTStorageHash","type":"string"},{"indexed":false,"internalType":"string","name":"newNFTStorageHash","type":"string"}],"name":"HashUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string[]","name":"nftStorageHashes","type":"string[]"}],"name":"HashesAssignedInBulk","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string[]","name":"nftStorageHashes","type":"string[]"}],"name":"HashesReleasedInBulk","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string[]","name":"oldNFTStorageHashes","type":"string[]"},{"indexed":false,"internalType":"string[]","name":"newNFTStorageHashes","type":"string[]"}],"name":"HashesUpdatedInBulk","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"nftStorageHash","type":"string"}],"name":"assignHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"nftStorageHashes","type":"string[]"}],"name":"assignHashesInBulk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"destraCoreZ2","outputs":[{"internalType":"contract IDestraCoreZ2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserNFTHashes","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"hashOwnership","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"nftStorageHash","type":"string"}],"name":"releaseHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"nftStorageHashes","type":"string[]"}],"name":"releaseHashesInBulk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_destraCoreZ2Address","type":"address"}],"name":"setDestraCoreZ2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"oldNFTStorageHash","type":"string"},{"internalType":"string","name":"newNFTStorageHash","type":"string"}],"name":"updateHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"oldNFTStorageHashes","type":"string[]"},{"internalType":"string[]","name":"newNFTStorageHashes","type":"string[]"}],"name":"updateHashesInBulk","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
          , d = a(67294)
          , o = a(41664)
          , u = a.n(o)
          , c = a(7654)
          , p = a(98778)
          , f = a(25675)
          , y = a.n(f)
          , m = a(5305);
        function x(e) {
            let {open: t} = e
              , {address: a, chainId: o, isConnected: f} = (0,
            c.Zc)()
              , {walletProvider: x} = (0,
            c.B0)()
              , [h,b] = (0,
            d.useState)(!1)
              , [g,w] = (0,
            d.useState)(null)
              , [v,j] = (0,
            d.useState)("")
              , N = (0,
            d.useRef)(null)
              , [T,k] = (0,
            d.useState)(null)
              , [F,S] = (0,
            d.useState)(null)
              , [M,C] = (0,
            d.useState)(null)
              , [z,H] = (0,
            d.useState)(!1)
              , [E,P] = (0,
            d.useState)("")
              , [D,O] = (0,
            d.useState)(!1)
              , [A,B] = (0,
            d.useState)("")
              , I = () => {
                w(null),
                P("")
            }
            ;
            async function _() {
                t()
            }
            let U = () => {
                b(!1)
            }
            ;
            (0,
            d.useEffect)( () => {
                (async () => {
                    if (x)
                        try {
                            let e = new s.Q(x)
                              , t = await e.getSigner()
                              , a = new i.CH("0x6Db39DBEE2Ed2267924398c77ED2ee41D7dAB2f1",r.Mt,t);
                            S(a);
                            let n = new i.CH("0x35b1668379584B4d6FC4Fc3D87cd34f378Ac9E4b",l.Mt,t);
                            C(n)
                        } catch (e) {
                            console.log("Error connecting to metamask", e)
                        }
                }
                )()
            }
            , [x]);
            let Z = async e => {
                if (M)
                    try {
                        let t = await M.assignHash(e);
                        await t.wait(),
                        console.log("Hash assigned to your pack successfully")
                    } catch (e) {
                        console.error("Error assigning hash:", e)
                    }
            }
              , R = () => {
                var e;
                null === (e = N.current) || void 0 === e || e.click()
            }
              , V = async () => {
                if (!g)
                    return;
                H(!0);
                let e = new FormData;
                e.append("file", g);
                try {
                    let t = await fetch("/api/upload", {
                        method: "POST",
                        body: e
                    });
                    if (t.ok) {
                        let e = await t.json();
                        B(e.result.pin.cid),
                        await Z(e.result.pin.cid)
                    } else
                        throw Error("Upload failed")
                } catch (e) {
                    j(e.message)
                } finally {
                    H(!1)
                }
            }
            ;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    className: "body-wrapper  mt-0 w-full  content-center items-start justify-start",
                    style: {
                        minHeight: "calc(100vh - 226px)"
                    },
                    children: f ? (0,
                    n.jsx)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col w-full justify-between gap-8 py-10",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [(0,
                                n.jsxs)("div", {
                                    className: "flex flex-col gap-y-4 text-black",
                                    children: [(0,
                                    n.jsx)("h2", {
                                        className: "text-3xl md:text-6xl font-bold",
                                        children: "Upload Your NFT"
                                    }), (0,
                                    n.jsx)("p", {
                                        children: "Effortlessly share your files and unleash collaboration. Simplify content sharing with our seamless upload feature."
                                    })]
                                }), (0,
                                n.jsxs)(p.zx, {
                                    onClick: R,
                                    className: "hidden md:flex w-fit items-center gap-2 rounded-full bg-transparent px-6 py-6 border border-[#737373] hover:bg-transparent",
                                    children: [(0,
                                    n.jsx)(y(), {
                                        src: "/document-upload-w.svg",
                                        alt: "upload",
                                        className: "w-fit ",
                                        width: 100,
                                        height: 100
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "font-medium text-[#737373]",
                                        children: "Upload"
                                    })]
                                })]
                            }), (0,
                            n.jsxs)("div", {
                                className: "flex h-full max-w-screen-xl w-full  flex-col items-center py-0 sm:px-0",
                                children: [!g && (0,
                                n.jsxs)("div", {
                                    onDrop: e => {
                                        e.preventDefault(),
                                        j("");
                                        let t = e.dataTransfer.files;
                                        if (t && t.length > 0) {
                                            if (t[0].size > 5242880) {
                                                j("File size exceeds 5MB limit.");
                                                return
                                            }
                                            w(t[0])
                                        }
                                    }
                                    ,
                                    onDragOver: e => {
                                        e.preventDefault()
                                    }
                                    ,
                                    className: "flex w-full flex-col items-center justify-center gap-2 rounded-[44px] border-2 border-dashed border-[#FF3838] bg-[#ff38381f] py-8 md:py-20 ",
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0,
                                        n.jsx)("div", {
                                            className: "text-xl font-medium text-[#FF0800]",
                                            children: (0,
                                            n.jsx)(y(), {
                                                src: "/fileupload.svg",
                                                alt: "upload",
                                                className: "w-fit",
                                                width: 100,
                                                height: 100
                                            })
                                        })
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "flex flex-col items-center justify-center",
                                        children: (0,
                                        n.jsxs)("div", {
                                            className: "flex flex-col gap-6",
                                            children: [(0,
                                            n.jsxs)("div", {
                                                className: "border-red-700 flex cursor-pointer flex-col gap-2 rounded-md text-center font-medium",
                                                children: [(0,
                                                n.jsx)("p", {
                                                    children: "Drag & drop index file here"
                                                }), (0,
                                                n.jsx)("p", {
                                                    className: "text-[#757577]",
                                                    children: "or"
                                                })]
                                            }), (0,
                                            n.jsxs)(p.zx, {
                                                onClick: R,
                                                className: "mx-auto flex h-12 w-fit items-center gap-2 rounded-full bg-red px-5 hover:bg-red/90",
                                                children: [(0,
                                                n.jsx)(y(), {
                                                    src: "/upload.svg",
                                                    alt: "upload",
                                                    className: "w-fit",
                                                    width: 100,
                                                    height: 100
                                                }), (0,
                                                n.jsx)("p", {
                                                    className: "font-medium text-white",
                                                    children: "Upload File"
                                                })]
                                            }), (0,
                                            n.jsx)("p", {
                                                className: "text-center",
                                                children: "Maximum file size 512 MB"
                                            })]
                                        })
                                    })]
                                }), (0,
                                n.jsx)("input", {
                                    ref: N,
                                    type: "file",
                                    className: "hidden",
                                    onChange: e => {
                                        let t = e.target.files;
                                        if (t && t.length > 0) {
                                            if (t[0].size > 5242880) {
                                                j("File size exceeds 5MB limit.");
                                                return
                                            }
                                            w(t[0])
                                        }
                                    }
                                }), g && !A && (0,
                                n.jsx)("div", {
                                    className: "flex flex-col items-center gap-y-6 ",
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: "mx-auto flex gap-y-4 w-11/12 flex-1 flex-col items-center justify-between self-stretch overflow-auto rounded-3xl bg-white/90 p-8 md:w-full",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: "flex w-96 justify-between rounded-xl bg-white p-4",
                                            children: [(0,
                                            n.jsxs)("div", {
                                                className: "flex items-center gap-4",
                                                children: [(0,
                                                n.jsx)(y(), {
                                                    src: "/file.svg",
                                                    alt: "alt",
                                                    className: "w-12",
                                                    width: 500,
                                                    height: 500
                                                }), (0,
                                                n.jsx)("p", {
                                                    className: "font-medium",
                                                    children: E
                                                })]
                                            }), (0,
                                            n.jsx)(y(), {
                                                src: "/trash.svg",
                                                alt: "trash",
                                                className: "w-fit brightness-0 hover:brightness-100",
                                                width: 500,
                                                height: 500,
                                                onClick: () => I()
                                            })]
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "flex items-start justify-between gap-6 self-stretch",
                                            children: g && (0,
                                            n.jsxs)("div", {
                                                className: "flex h-12 justify-center items-center gap-x-2 w-full rounded-[32px] bg-[#FF3131] px-6 hover:opacity-90",
                                                children: [(0,
                                                n.jsx)(y(), {
                                                    src: "/upload.svg",
                                                    alt: "upload",
                                                    className: "w-fit",
                                                    width: 100,
                                                    height: 100
                                                }), (0,
                                                n.jsx)("button", {
                                                    onClick: V,
                                                    disabled: z,
                                                    className: "glow-button font-medium text-white",
                                                    children: z ? "Uploading" : "Upload"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0,
                                n.jsx)(m.Vq, {
                                    onOpenChange: e => {
                                        e === h || (b(e),
                                        e || U())
                                    }
                                    ,
                                    open: h,
                                    children: (0,
                                    n.jsxs)(m.cZ, {
                                        className: "w-full border border-[#ffffff70] text-[#262626]",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: "flex w-full max-w-[280px] flex-col items-center justify-center gap-y-4 md:max-w-[450px]",
                                            children: [(0,
                                            n.jsx)(y(), {
                                                src: "/success-green.svg",
                                                alt: "alt",
                                                className: "w-20",
                                                width: 500,
                                                height: 500
                                            }), (0,
                                            n.jsx)("p", {
                                                children: "Files Uploaded Successfully"
                                            }), (0,
                                            n.jsxs)("div", {
                                                className: "relative flex w-full items-center justify-between rounded-xl border-[1px] border-[#FF3838] p-2.5 font-medium text-[#FF3838]",
                                                children: [(0,
                                                n.jsx)(y(), {
                                                    src: "/copy.svg",
                                                    className: "w-6 cursor-pointer",
                                                    alt: "alt",
                                                    width: 500,
                                                    height: 500,
                                                    onClick: () => {
                                                        navigator.clipboard.writeText("https://swam-threw-is.quicknode-ipfs.com/ipfs/".concat(A)),
                                                        O(!0),
                                                        setTimeout( () => {
                                                            O(!1)
                                                        }
                                                        , 2e3)
                                                    }
                                                }), D && (0,
                                                n.jsx)("p", {
                                                    className: "absolute bottom-12 right-0 text-[#FF3838]",
                                                    children: "Copied to clipboard!"
                                                }), (0,
                                                n.jsx)("p", {
                                                    className: "max-w-sm truncate",
                                                    children: A
                                                })]
                                            })]
                                        }), (0,
                                        n.jsx)(m.cN, {
                                            children: (0,
                                            n.jsx)("div", {
                                                className: "w-full items-center",
                                                children: (0,
                                                n.jsx)(u(), {
                                                    href: "https://swam-threw-is.quicknode-ipfs.com/ipfs/".concat(A),
                                                    target: "_blank",
                                                    children: (0,
                                                    n.jsx)(p.zx, {
                                                        className: "flex w-full items-center justify-center rounded-[32px] bg-[#FF3838] hover:bg-[#FF3838]",
                                                        children: "View File"
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }), v && (0,
                                n.jsx)("p", {
                                    className: "text-red-500 mt-4",
                                    children: v
                                })]
                            })]
                        })
                    }) : (0,
                    n.jsxs)("div", {
                        className: "flex flex-col item-center  gap-6",
                        children: [(0,
                        n.jsx)("div", {
                            className: "text-5xl md:text-6xl font-black not-italic  text-red ",
                            children: "Upload NFT"
                        }), (0,
                        n.jsxs)("button", {
                            className: "px-4 py-3 mt-0 mx-auto font-semibold text-black border border-[#e8e3e3] bg-white hover:bg-white text-red-500 rounded-xl flex items-center gap-2",
                            onClick: _,
                            children: ["Connect Wallet", (0,
                            n.jsx)(y(), {
                                src: "/send-v2.svg",
                                alt: "wallet",
                                className: "w-3.5",
                                width: 20,
                                height: 20
                            })]
                        })]
                    })
                })
            })
        }
    },
    6181: function(e, t, a) {
        var n = a(85893)
          , s = a(31376)
          , i = a(7583)
          , r = a(48470)
          , l = a(41664)
          , d = a.n(l)
          , o = a(67294)
          , u = a(43594)
          , c = a(55678)
          , p = a(7654)
          , f = a(88860)
          , y = a(98778)
          , m = a(25675)
          , x = a.n(m);
        t.Z = e => {
            let {open: t} = e
              , {address: a, chainId: l, isConnected: m} = (0,
            p.Zc)()
              , {walletProvider: h} = (0,
            p.B0)()
              , [b,g] = (0,
            o.useState)(1)
              , [w,v] = (0,
            o.useState)(20)
              , [j,N] = (0,
            o.useState)(1)
              , [T,k] = (0,
            o.useState)("0.025")
              , [F,S] = (0,
            o.useState)(.05)
              , [M,C] = (0,
            o.useState)(null)
              , [z] = (0,
            o.useState)(1e3)
              , [H] = (0,
            o.useState)(1e4)
              , [E,P] = (0,
            o.useState)(1e3);
            async function D() {
                t()
            }
            async function O(e) {
                k(parseFloat((E / 1e3 * .05 * e).toString()).toFixed(3))
            }
            (0,
            o.useEffect)( () => {
                (async () => {
                    if (h)
                        try {
                            let e = new s.Q(h)
                              , t = await e.getSigner()
                              , a = new i.CH("0x6Db39DBEE2Ed2267924398c77ED2ee41D7dAB2f1",u.Mt,t);
                            C(a),
                            g(1),
                            v(20),
                            await O(1)
                        } catch (e) {
                            console.error("Error initializing contract or fetching data:", e)
                        }
                }
                )()
            }
            , [h]);
            let A = async e => {
                N(e),
                await O(e)
            }
              , B = async e => {
                P(e),
                await O(j)
            }
            ;
            async function I() {
                if (M)
                    try {
                        let e = await M.buyStoragePack(E, j, {
                            value: r.fi(T)
                        });
                        await e.wait(),
                        c.Am.success("Storage Pack purchased successfully!")
                    } catch (e) {
                        console.log(e),
                        c.Am.error("Failed to purchase Storage Pack")
                    }
            }
            return (0,
            n.jsx)("div", {
                className: "body-wrapper text-black mt-0 w-full flex content-center items-center",
                style: {
                    minHeight: "calc(100vh - 226px)"
                },
                children: m ? (0,
                n.jsx)("div", {
                    className: "flex flex-col items-center justify-center w-full",
                    children: (0,
                    n.jsxs)("div", {
                        className: "flex w-11/12 max-w-screen-2xl flex-col items-center justify-between gap-y-10 md:w-full",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-y-6  py-8",
                            children: [(0,
                            n.jsx)("div", {
                                className: "text-5xl font-black not-italic  text-[#262626]",
                                children: "Buy NFT Storage"
                            }), (0,
                            n.jsx)("p", {
                                className: "w-full flex-wrap self-stretch text-center text-xl  font-normal not-italic text-[#262626]",
                                children: "Make your NFTs truly decentralized."
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-y-6 md:flex-row w-fit mx-auto md:w-11/12 items-start justify-evenly",
                            children: [(0,
                            n.jsx)("div", {
                                className: "h-full w-fit rounded-3xl bg-white  py-10",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "mx-auto flex w-full flex-col gap-y-6 px-6",
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0,
                                            n.jsx)("h6", {
                                                className: "text-[#404040]",
                                                children: "Choose your storage duration"
                                            }), (0,
                                            n.jsx)("h6", {
                                                children: "Max: 1000"
                                            })]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "  gap-4 flex items-center justify-between self-stretch rounded-xl border-2 border-[#EAECF0] py-2 ",
                                            children: [(0,
                                            n.jsx)(y.zx, {
                                                onClick: () => B(Math.max(E - 1e3, z)),
                                                className: "text-2xl",
                                                variant: "ghost",
                                                children: "-"
                                            }), (0,
                                            n.jsxs)("span", {
                                                className: "text-sm font-semibold",
                                                children: [E, " NFT", 1 !== E ? "s" : ""]
                                            }), (0,
                                            n.jsx)(y.zx, {
                                                onClick: () => B(Math.min(E + 1e3, H)),
                                                className: "text-2xl",
                                                variant: "ghost",
                                                children: "+"
                                            })]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "flex justify-between  ",
                                            children: [(0,
                                            n.jsx)("button", {
                                                className: "py-2 px-4 text-[#404040] border-2 border-solid rounded-xl border-[#EAECF0] bg-red-800  hover:bg-[#FF3838] hover:text-white bg-[#F2F4F7]",
                                                onClick: () => B(.25 * H),
                                                children: "25%"
                                            }), (0,
                                            n.jsx)("button", {
                                                className: "py-2 px-4 text-[#404040] border-2 border-solid rounded-xl border-[#EAECF0] bg-red-800  hover:bg-[#FF3838] hover:text-white bg-[#F2F4F7]",
                                                onClick: () => B(.5 * H),
                                                children: "50%"
                                            }), (0,
                                            n.jsx)("button", {
                                                className: "py-2 px-4 text-[#404040] border-2 border-solid rounded-xl border-[#EAECF0] bg-red-800  hover:bg-[#FF3838] hover:text-white bg-[#F2F4F7]",
                                                onClick: () => B(.75 * H),
                                                children: "75%"
                                            }), (0,
                                            n.jsx)("button", {
                                                className: "py-2 px-4 text-[#404040] border-2 border-solid rounded-xl border-[#EAECF0] bg-red-800  hover:bg-[#FF3838] hover:text-white bg-[#F2F4F7]",
                                                onClick: () => B(H),
                                                children: "100%"
                                            })]
                                        })]
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "flex flex-col gap-3",
                                        children: (0,
                                        n.jsxs)("div", {
                                            className: "flex flex-col gap-3",
                                            children: [(0,
                                            n.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0,
                                                n.jsx)("h6", {
                                                    className: "text-[#404040]",
                                                    children: "Choose your storage duration"
                                                }), (0,
                                                n.jsx)("h6", {
                                                    children: "Max: 20 Years"
                                                })]
                                            }), (0,
                                            n.jsxs)("div", {
                                                className: "flex items-center justify-between rounded-xl border-2 border-[#EAECF0] py-2 ",
                                                children: [(0,
                                                n.jsx)(y.zx, {
                                                    onClick: () => A(Math.max(j - 1, b)),
                                                    className: "text-2xl",
                                                    variant: "ghost",
                                                    children: "-"
                                                }), (0,
                                                n.jsxs)("span", {
                                                    className: "text-sm font-semibold",
                                                    children: [j, " Year", j > 1 ? "s" : ""]
                                                }), (0,
                                                n.jsx)(y.zx, {
                                                    onClick: () => A(Math.min(j + 1, w)),
                                                    className: "text-2xl",
                                                    variant: "ghost",
                                                    children: "+"
                                                })]
                                            })]
                                        })
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [(0,
                                        n.jsx)("h6", {
                                            className: "",
                                            children: "Referral code"
                                        }), (0,
                                        n.jsx)(f.I, {
                                            type: "text",
                                            placeholder: "Enter Code",
                                            className: "rounded-2xl border border-[#EAECF0] bg-[#FFF] py-6"
                                        })]
                                    })]
                                })
                            }), (0,
                            n.jsxs)("div", {
                                className: "flex h-full w-full max-w-md flex-col gap-y-4  rounded-3xl bg-white px-4 py-10",
                                children: [(0,
                                n.jsxs)("div", {
                                    className: "flex justify-between font-semibold text-[#757577]",
                                    children: [(0,
                                    n.jsx)("span", {
                                        children: "Sub total:"
                                    }), (0,
                                    n.jsxs)("span", {
                                        children: [j, " years"]
                                    })]
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col justify-between gap-y-4 rounded-2xl bg-[#FFFFFF0A]",
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "flex justify-between rounded-xl border border-[#c2c3c5] px-2 py-3",
                                        children: [(0,
                                        n.jsx)("span", {
                                            className: "font-semibold text-black",
                                            children: "Price:"
                                        }), (0,
                                        n.jsxs)("span", {
                                            className: "font-semibold text-black",
                                            children: [T, " ETH"]
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "flex items-center gap-3 text-[#757577] ",
                                        children: [(0,
                                        n.jsx)("input", {
                                            type: "checkbox",
                                            id: "checkbox",
                                            className: "ui-checkbox size-5"
                                        }), (0,
                                        n.jsxs)("label", {
                                            htmlFor: "checkbox",
                                            children: ["I have read the details of Destra Decentralized NFT Storage"]
                                        })]
                                    }), (0,
                                    n.jsx)(y.zx, {
                                        className: "rounded-full bg-[#FF3838] px-4 py-1.5 text-center font-medium text-white hover:bg-red md:px-8",
                                        onClick: I,
                                        children: "Buy"
                                    })]
                                })]
                            })]
                        })]
                    })
                }) : (0,
                n.jsxs)("div", {
                    className: "flex flex-col justify-center text-center items-center gap-2 w-full",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-y-6  py-8",
                        children: [(0,
                        n.jsx)("div", {
                            className: "text-5xl md:text-6xl font-black not-italic  text-red",
                            children: "Buy NFT Storage"
                        }), (0,
                        n.jsx)("p", {
                            className: "w-full flex-wrap self-stretch text-center text-xl  font-normal not-italic text-red/70",
                            children: "Store your NFTs on Destra Decentralized File Storage Network"
                        })]
                    }), (0,
                    n.jsxs)("button", {
                        className: "px-4 py-3 mt-0 mx-auto font-semibold text-black border border-[#e8e3e3] bg-white hover:bg-white text-red-500 rounded-xl flex items-center gap-2",
                        onClick: D,
                        children: ["Connect Wallet", (0,
                        n.jsx)(x(), {
                            src: "/send-v2.svg",
                            alt: "wallet",
                            className: "w-3.5",
                            width: 20,
                            height: 20
                        })]
                    })]
                })
            })
        }
    },
    98778: function(e, t, a) {
        a.d(t, {
            dc: function() {
                return d
            },
            zx: function() {
                return o
            }
        });
        var n = a(85893)
          , s = a(67294)
          , i = a(88426)
          , r = a(45139)
          , l = a(94777);
        let d = (0,
        r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", {
            variants: {
                variant: {
                    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
                    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
                    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
                    ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                    link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , o = s.forwardRef( (e, t) => {
            let {className: a, variant: s, size: r, asChild: o=!1, ...u} = e
              , c = o ? i.g7 : "button";
            return (0,
            n.jsx)(c, {
                className: (0,
                l.cn)(d({
                    variant: s,
                    size: r,
                    className: a
                })),
                ref: t,
                ...u
            })
        }
        );
        o.displayName = "Button",
        t.ZP = o
    },
    5305: function(e, t, a) {
        a.d(t, {
            $N: function() {
                return y
            },
            Be: function() {
                return m
            },
            Vq: function() {
                return l
            },
            cN: function() {
                return f
            },
            cZ: function() {
                return c
            },
            fK: function() {
                return p
            },
            hg: function() {
                return d
            }
        });
        var n = a(85893)
          , s = a(67294)
          , i = a(12854)
          , r = a(94777);
        let l = i.fC
          , d = i.xz
          , o = i.h_;
        i.x8;
        let u = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.aV, {
                ref: t,
                className: (0,
                r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                ...s
            })
        }
        );
        u.displayName = i.aV.displayName;
        let c = s.forwardRef( (e, t) => {
            let {className: a, children: s, ...l} = e;
            return (0,
            n.jsxs)(o, {
                children: [(0,
                n.jsx)(u, {}), (0,
                n.jsx)(i.VY, {
                    ref: t,
                    className: (0,
                    r.cn)("fixed left-[50%] top-[50%] z-50 grid w-full md:max-w-lg max-w-[330px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-8 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-[44px] dark:border-slate-800 dark:bg-slate-950", a),
                    ...l,
                    children: s
                })]
            })
        }
        );
        c.displayName = i.VY.displayName;
        let p = e => {
            let {className: t, ...a} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                r.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                ...a
            })
        }
        ;
        p.displayName = "DialogHeader";
        let f = e => {
            let {className: t, ...a} = e;
            return (0,
            n.jsx)("div", {
                className: (0,
                r.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                ...a
            })
        }
        ;
        f.displayName = "DialogFooter";
        let y = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.Dx, {
                ref: t,
                className: (0,
                r.cn)("text-lg font-semibold leading-none tracking-tight", a),
                ...s
            })
        }
        );
        y.displayName = i.Dx.displayName;
        let m = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.dk, {
                ref: t,
                className: (0,
                r.cn)("text-sm text-slate-500 dark:text-slate-400", a),
                ...s
            })
        }
        );
        m.displayName = i.dk.displayName
    },
    88860: function(e, t, a) {
        a.d(t, {
            I: function() {
                return r
            }
        });
        var n = a(85893)
          , s = a(67294)
          , i = a(94777);
        let r = s.forwardRef( (e, t) => {
            let {className: a, type: s, ...r} = e;
            return (0,
            n.jsx)("input", {
                type: s,
                className: (0,
                i.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950  disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300", a),
                ref: t,
                ...r
            })
        }
        );
        r.displayName = "Input",
        t.Z = r
    },
    93517: function(e, t, a) {
        a.d(t, {
            SP: function() {
                return o
            },
            dr: function() {
                return d
            },
            mQ: function() {
                return l
            },
            nU: function() {
                return u
            }
        });
        var n = a(85893)
          , s = a(67294)
          , i = a(31702)
          , r = a(94777);
        let l = i.fC
          , d = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.aV, {
                ref: t,
                className: (0,
                r.cn)("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400", a),
                ...s
            })
        }
        );
        d.displayName = i.aV.displayName;
        let o = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.xz, {
                ref: t,
                className: (0,
                r.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50", a),
                ...s
            })
        }
        );
        o.displayName = i.xz.displayName;
        let u = s.forwardRef( (e, t) => {
            let {className: a, ...s} = e;
            return (0,
            n.jsx)(i.VY, {
                ref: t,
                className: (0,
                r.cn)("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", a),
                ...s
            })
        }
        );
        u.displayName = i.VY.displayName,
        t.ZP = l
    },
    94777: function(e, t, a) {
        a.d(t, {
            cn: function() {
                return i
            }
        });
        var n = a(90512)
          , s = a(98388);
        function i() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return (0,
            s.m6)((0,
            n.W)(t))
        }
    },
    45139: function(e, t, a) {
        a.d(t, {
            j: function() {
                return i
            }
        });
        let n = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
          , s = function() {
            for (var e, t, a = 0, n = ""; a < arguments.length; )
                (e = arguments[a++]) && (t = function e(t) {
                    var a, n, s = "";
                    if ("string" == typeof t || "number" == typeof t)
                        s += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (a = 0; a < t.length; a++)
                                t[a] && (n = e(t[a])) && (s && (s += " "),
                                s += n);
                        else
                            for (a in t)
                                t[a] && (s && (s += " "),
                                s += a)
                    }
                    return s
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
          , i = (e, t) => a => {
            var i;
            if ((null == t ? void 0 : t.variants) == null)
                return s(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
            let {variants: r, defaultVariants: l} = t
              , d = Object.keys(r).map(e => {
                let t = null == a ? void 0 : a[e]
                  , s = null == l ? void 0 : l[e];
                if (null === t)
                    return null;
                let i = n(t) || n(s);
                return r[e][i]
            }
            )
              , o = a && Object.entries(a).reduce( (e, t) => {
                let[a,n] = t;
                return void 0 === n || (e[a] = n),
                e
            }
            , {});
            return s(e, d, null == t ? void 0 : null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce( (e, t) => {
                let {class: a, className: n, ...s} = t;
                return Object.entries(s).every(e => {
                    let[t,a] = e;
                    return Array.isArray(a) ? a.includes({
                        ...l,
                        ...o
                    }[t]) : ({
                        ...l,
                        ...o
                    })[t] === a
                }
                ) ? [...e, a, n] : e
            }
            , []), null == a ? void 0 : a.class, null == a ? void 0 : a.className)
        }
    },
    43594: function(e) {
        e.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"_initialPricePerThousand","type":"uint256"},{"internalType":"uint256","name":"_maxPackSize","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PricePerThousandNFTsUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"proofOfSyncFactory","type":"address"}],"name":"ProofOfSyncFactorySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"SetMaxPackSize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"packSize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_years","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"expirationDate","type":"uint256"}],"name":"StoragePackPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"packIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_years","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newExpirationDate","type":"uint256"}],"name":"StoragePackRenewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"packIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newOwnerPackIndex","type":"uint256"}],"name":"StoragePackTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferForeignToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"uint256","name":"packSize","type":"uint256"},{"internalType":"uint256","name":"_years","type":"uint256"}],"name":"buyStoragePack","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStoragePacks","outputs":[{"components":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"internalType":"struct DestraCoreZ2.StoragePack[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalValidPackSize","outputs":[{"internalType":"uint256","name":"totalSize","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"packIndex","type":"uint256"}],"name":"isPackValid","outputs":[{"internalType":"bool","name":"isValid","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPackSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePerThousandNFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proofOfSyncFactory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"packIndex","type":"uint256"},{"internalType":"uint256","name":"_years","type":"uint256"}],"name":"renewStoragePack","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proofOfSyncFactory","type":"address"}],"name":"setDestraFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSize","type":"uint256"}],"name":"setMaxPackSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPricePerThousand","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferForeignToken","outputs":[{"internalType":"bool","name":"_sent","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"packIndex","type":"uint256"}],"name":"transferPack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStoragePacks","outputs":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    }
}]);
