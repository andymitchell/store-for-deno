In the Store source, there's a test for using Deno to import it. 

There's a brand new feature to 'patch' a local npm repo into deno (https://github.com/denoland/deno/pull/28512#issue-2922225164), which solves the problem of testing the Store source in deno. 

But it requires the npm package to exist in the registry. So this is a way of faking it up there so it can be patched locally. 