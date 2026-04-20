
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "mudlabs-ui": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__host__prebuild__mudlabs_mf_2_ui__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__host__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__host__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "mudlabs-ui": {
            name: "mudlabs-ui",
            version: "0.1.1",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__host",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"mudlabs-ui"}' must be provided by host`);
              }
              usedShared["mudlabs-ui"].loaded = true
              const {"mudlabs-ui": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "mudlabs-ui" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^0.1.1",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.5",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__host",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.2.5",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.5",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__host",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react-dom" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.2.5",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "piecesRemote",
                  name: "piecesRemote",
                  type: "module",
                  entry: "undefined/assets/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "creationsRemote",
                  name: "creationsRemote",
                  type: "module",
                  entry: "undefined/assets/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "tourGuideRemote",
                  name: "tourGuideRemote",
                  type: "module",
                  entry: "undefined/assets/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      