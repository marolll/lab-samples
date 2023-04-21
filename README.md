We provide 3d party developers access to our sandbox environment so they can experiment with developing applications based on our SDK / API.

The sandbox is accessible at https://sandbox.elabjournal.com
We created an account for you with the following credentials:

username: developer+assessment@elabnext.com
password: `{[O_F?V.`

The documentation for our sandbox API can be found:

https://developer.elabnext.com/ , login using the given sandbox credentials.

Your assessment:

Create a Vue application that lists the logged in users' Samples. There should be 2 view modes available for the user.

1. Tableview: display the samples in a vertical listing
   For this view, you can use the endpoint `/api/v1/samples` (see https://developer.elabnext.com/reference/sample_getsamples)
2. Compartment view: each sample can be contained within a storagelayer (e.g. drawer or box), each storagelayer is contained in either another storagelayer or a storageunit (e.g. freezer or cabinet): Display the hierarchical structure of the compartments including the contained samples.
   For this view, you can use the `location` expand on the samples endpoint: `https://sandbox.elabjournal.com/api/v1/samples?$expand=location`, this will provide extra information on the location (storagelayers / storageunits) of the samples.

   Bonus: display some extra information on the containing compartment (storagelayer) when hovering over it. (hint: https://developer.elabnext.com/reference/storage_getstoragelayerbyid)
