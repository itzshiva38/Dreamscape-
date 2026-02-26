import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";

interface Props {
  onUnlock: () => void;
}

export default function DreamscapePasswordGate({ onUnlock }: Props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const CORRECT_PASSWORD = "gargeeissuchacutie@0709022716";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setFadeOut(true);
      setTimeout(onUnlock, 700);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background">
      <AnimatePresence>
        {!fadeOut && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm"
          >
            <div className="flex flex-col items-center gap-5 py-8 glass-card">
              <Sparkles className="w-10 h-10 text-primary" />
              <h2 className="text-xl font-serif dreamscape-glow-text text-center">
                Welcome to Our Dreamscape
              </h2>
              <p className="text-sm text-muted-foreground text-center">
                A world built for two.
              </p>

              <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-3">
                <motion.div animate={error ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the password..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none bg-black/20 border border-white/10 focus:border-primary transition-colors"
                  />
                </motion.div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Enter
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
