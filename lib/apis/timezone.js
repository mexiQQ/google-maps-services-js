/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;

var utils = require('../internal/convert');
var v = require('../internal/validate');

/**
 * Makes a timezone request.
 *
 * @name GoogleMapsClient#timezone
 * @function
 * @param {Object} query
 * @param {LatLng} query.location
 * @param {Date|number} [query.timestamp]
 * @param {string} [query.language]
 * @param {ResponseCallback} callback Callback function for handling the result
 * @return {RequestHandle}
 */
exports.timezone = {
  url: 'https://maps.google.cn/maps/api/timezone/json',
  validator: v.object({
    location: utils.latLng,
    timestamp: utils.timeStamp,
    language: v.optional(v.string),
    retryOptions: v.optional(utils.retryOptions),
    timeout: v.optional(v.number)
  })
};
