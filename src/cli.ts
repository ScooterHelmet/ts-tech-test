#!/usr/bin/env npx ts-node
import fse from 'fs-extra'
import yargs from 'yargs'

// create new argument with options
const args: any = yargs.options({
  name: {
    alias: 'n',
    demandOption: true,
    type: 'string'
  }
}).argv;

// uses created argument option
fse.mkdir(`./tmp/${args['name']}`, (error: Error) => {
  if (error) {
    console.log(`ERROR: ${args['name']} already exists!`)
    process.exit(0)
  }

  const peer = `./tmp/${args['name']}/balance.txt`
  fse.outputFileSync(peer,`0`)

  const peerBalance = fse.readFileSync(peer, 'utf8')
  console.log(`Instantiated ${peer} with ${peerBalance}`)

  process.exit(0);
})

/** "Send money to the other user"
 * 1) Add another argument option that requires pay <number> and <string> (i.e. )
 * 2) Perform subtraction given <number>
 * 3) Overwrite existing balanace.txt with new balance
 */

/** "View their own balance"
 * 1) Add another argument that takes <number> and <name>
 * 2) Read balance.txt file value as a number
 */