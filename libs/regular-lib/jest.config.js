module.exports = {
  name: 'regular-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/regular-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
