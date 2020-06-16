module.exports = {
  name: 'my-feature-module',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-feature-module',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
