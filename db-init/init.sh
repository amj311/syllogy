#!/bin/bash

echo -n "\n\nBUILDING DOCKER WITH SEED"
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f /seed.sql
