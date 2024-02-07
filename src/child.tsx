import React, { ChangeEventHandler, useState } from "react";

import { useI18nContext } from "./i18n/i18n-react";
import type { Locales } from "./i18n/i18n-types";
import { locales } from "./i18n/i18n-util";
import { loadLocaleAsync } from "./i18n/i18n-util.async";

function Child() {
  const { locale, LL, setLocale } = useI18nContext();

  const [name, setName] = useState("John");

  const onLocaleSelected: ChangeEventHandler<HTMLSelectElement> = async ({ target }) => {
    const locale = target.value as Locales;
    localStorage.setItem("lang", locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };

  const onNameChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => setName(target.value);

  return (
    <header className="App-header">
      <label>
        {LL.SELECTED_LOCALE()}
        <select value={locale || ""} onChange={onLocaleSelected}>
          <option value="" disabled>
            {LL.CHOOSE_LOCALE()}
          </option>
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </label>

      <hr />

      {LL.HI({ name })}
      <label>
        {LL.YOUR_NAME()}
        <input type="text" value={name} onChange={onNameChange} />
      </label>

      <hr />

      {LL.TODAY({ date: new Date() })}

      <hr />

      <p dangerouslySetInnerHTML={{ __html: LL.EDIT_AND_SAVE() }}></p>
    </header>
  );
}

export default Child;
