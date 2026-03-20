import { menuA, menuB, type MenuItem } from "@/app/data/menu";

type MenuSectionProps = {
  onSelectItem: (item: MenuItem) => void;
};

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  return (
    <section id="menu" className="scroll-mt-14 border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold">Yakitori Menu</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/20"></div>
        </div>

        <div className="mx-auto max-w-xl space-y-12 text-left">
          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-wide">
              Menu A
            </h3>
            <div className="mb-6 h-px w-12 bg-white/20"></div>

            <ul className="space-y-3 text-stone-300">
              {menuA.map((item) => (
                <li key={item.name}>
                  {item.clickable ? (
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.98] active:bg-white/[0.06]"
                    >
                      <span className="text-white">•</span>
                      <span className="transition group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </button>
                  ) : (
                    <div className="flex gap-2 px-1 py-1">
                      <span className="text-white">•</span>
                      <span>{item.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-wide">
              Menu B
            </h3>
            <div className="mb-6 h-px w-12 bg-white/20"></div>

            <ul className="space-y-3 text-stone-300">
              {menuB.map((item) => (
                <li key={item.name}>
                  {item.clickable ? (
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.98] active:bg-white/[0.06]"
                    >
                      <span className="text-white">•</span>
                      <span className="transition group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </button>
                  ) : (
                    <div className="flex gap-2 px-1 py-1">
                      <span className="text-white">•</span>
                      <span>{item.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}