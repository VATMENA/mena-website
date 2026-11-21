import Header from "@/components/header/header"
import React from 'react'
import DataNotice from "@/components/vacc-data/data-notice"
import RosterFilter from "@/components/vacc-data/roster-filter"
import { getRosterForAllVaccs } from "@/lib/vatsim-api"

export const revalidate = 300;

async function ActiveRoster() {

    const directory = await getRosterForAllVaccs();

    return (
        <>
            <Header imageUrl="/images/atc-scope.jpg">
                <h1 className="text-5xl">Active Roster</h1>
            </Header>
            <div className="container mx-auto">
                <p className="mb-8">
                    Controllers currently endorsed to staff positions within the division. Pick a vACC
                    to see its roster. Home controllers hold the vACC as their primary posting, while
                    visiting controllers are based elsewhere and have been approved to control here.
                    Controllers with no endorsed positions are not listed.
                </p>
                {!directory.ok
                    ?
                    <DataNotice variant="error">{directory.error}</DataNotice>
                    :
                    <RosterFilter results={directory.results} />
                }
            </div>
        </>
    )
}

export default ActiveRoster
