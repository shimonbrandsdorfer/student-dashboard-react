CREATE TABLE "users" (
	"id" bigint PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL,
	"invite_code" text,
	"date_joined" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" bigint PRIMARY KEY NOT NULL,
	"topic" text NOT NULL,
	"cost" numeric(12, 2) NOT NULL,
	"num_of_sessions" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classes" (
	"id" bigint PRIMARY KEY NOT NULL,
	"course_id" bigint NOT NULL,
	"date_started" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "assignments" (
	"id" bigint PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"due_date" date NOT NULL,
	"date_created" timestamp with time zone DEFAULT now(),
	"last_updated" timestamp with time zone,
	"user_created" bigint NOT NULL,
	"class_id" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE "assinment_submissions" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" bigint NOT NULL,
	"assignment_id" bigint NOT NULL,
	"grade" integer,
	"date_submitted" timestamp with time zone DEFAULT now(),
	"date_graded" timestamp with time zone,
	"graded_by" bigint
);
--> statement-breakpoint
CREATE TABLE "logins" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" bigint NOT NULL,
	"datetime" timestamp with time zone DEFAULT now(),
	"success" boolean NOT NULL
);
--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_user_created_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assinment_submissions" ADD CONSTRAINT "assinment_submissions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assinment_submissions" ADD CONSTRAINT "assinment_submissions_assignment_id_assignments_id_fk" FOREIGN KEY ("assignment_id") REFERENCES "public"."assignments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assinment_submissions" ADD CONSTRAINT "assinment_submissions_graded_by_users_id_fk" FOREIGN KEY ("graded_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "logins" ADD CONSTRAINT "logins_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;

ALTER TABLE "classes" ADD COLUMN "teacher_id" bigint NOT NULL;--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacher_id_users_id_fk" FOREIGN KEY ("teacher_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
