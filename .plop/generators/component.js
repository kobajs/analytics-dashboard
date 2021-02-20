module.exports = {
  description: 'Application component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name please',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'components/{{ pascalCase name }}/index.ts',
      templateFile: 'templates/component-index.hbs',
    },
    {
      type: 'add',
      path: 'components/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
      templateFile: 'templates/component.hbs',
    },
    {
      type: 'add',
      path: 'components/{{ pascalCase name }}/{{ pascalCase name }}.styles.ts',
      templateFile: 'templates/component-styles.hbs',
    },
    {
      type: 'add',
      path:
        'components/{{ pascalCase name }}/__tests__/{{ pascalCase name }}.test.tsx',
      templateFile: 'templates/component-test.hbs',
    },
    {
      type: 'add',
      path:
        'components/{{ pascalCase name }}/__stories__/{{ pascalCase name }}.stories.tsx',
      templateFile: 'templates/component-stories.hbs',
    },
  ],
}
