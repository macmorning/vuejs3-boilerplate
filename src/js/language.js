import { createI18n } from 'vue-i18n'

export class Language
{
	constructor(app, config)
	{
		this.app = app
		this.createLanguageInstance()

		return this.i18n
	}

	createLanguageInstance()
	{
		this.i18n = createI18n({
			// something vue-i18n options here ...
		})
	}
}
